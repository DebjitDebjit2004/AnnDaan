import Event from '../Models/event.model.js';
import Location from "../Models/location.model.js";
import Food from "../Models/food.model.js";

// Create new event
export const createEvent = async (req, res) => {
    try {
        const { type_of_org, event_type } = req.body;

        const newEvent = await Event.create({
            user_id: req.user._id,
            type_of_org,
            event_type
        });
        res.status(201).json(newEvent);

    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all events for current user
export const getEvents = async (req, res) => {
    try {
        const events = await Event.find({ user_id: req.user._id });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get single event by ID
export const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        const location = await Location.find({event_id: req.params.id});
        const food = await Food.find({ event_id: req.params.id })

        res.status(200).json(event, location, food);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update event
export const updateEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Authorization check
        if (event.user_id.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Unauthorized access' });
        }

        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            {
                type_of_org: req.body.type_of_org,
                event_type: req.body.event_type
            },
            { new: true, runValidators: true }
        );

        res.status(200).json(updatedEvent);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete event
export const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Authorization check
        if (event.user_id.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Unauthorized access' });
        }

        await Event.deleteOne({ _id: req.params.id });

        //Jab Event Delete ho rha hai tab automatically location and food bhi delete ho rha hai
        await Location.deleteMany({ event_id: req.params.id });
        await Food.deleteMany({ event_id: req.params.id });
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
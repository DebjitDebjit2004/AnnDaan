import Event from '../Models/event.model.js';

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

        res.status(200).json(event);
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
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
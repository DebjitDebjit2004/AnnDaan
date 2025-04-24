import Location from "../Models/location.model.js";
import { locationApi } from "../Services/location.service.js";

export const createLocation = async(req, res) => {
    const {venue_name, pin_code, line_1, line_2} = req.body;
    if (!venue_name || !pin_code || !line_1 || !line_2) {
        return res.status(400).json({ message: "All Fields are required are required" });
    }

    if (venue_name > 3 || venue_name < 100) {
        res.status(400).json({ message: "venue name must be atleast 3 character or atmost 100 character"})
    }

    if (pin_code > 6) {
        res.status(400).json({ message: "pin code must be 6 digit"})
    }

    if (line_1 > 10 || line_1 < 100) {
        res.status(400).json({ message: "Enter the proper line1"});
    }

    if (line_2 > 10 || line_2 < 100) {
        res.status(400).json({ message: "Enter the proper line2"});
    }

    const location = locationApi(pin_code);

    const newLocation = await Location.create({
        event_id: req.params.id,
        venue_name: venue_name,
        pin_code: pin_code,
        city: location[0],
        district: location[1],
        region: location[2],
        state: location[3]
    })

    await newLocation.save();
    res.status(201).json({message: ``})

    try {
        
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}
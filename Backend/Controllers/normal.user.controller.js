import bycrypt from "bcryptjs";

import NormalUser from "../Models/normal.user.model.js";

import { checkFieldValidation, isValidEmail, isValidPassword, isValidPasswordFormat } from "../Services/normal.user.service.js";
import { generateToken } from "../Utils/generate.token.js";


export const Register = async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone } = req.body;

        const errorMsg = checkFieldValidation(firstName, lastName, email, phone);

        if (errorMsg) {
            return res.status(400).json({ message: errorMsg });
        }

        const passErrorMsg = isValidPassword(password);
        if (passErrorMsg) {
            return res.status(400).json({ message: passErrorMsg });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({ message: "Email must be a valid Gmail address" });
        }

        if (!isValidPasswordFormat(password)) {
            return res.status(400).json({ message: "Password must contain at least one letter, one number, and one special character" });
        }

        const normalUserExist = await NormalUser.findOne({ email });
        if (normalUserExist) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password, salt);

        const newUser = new NormalUser({
            name: {
                firstName,
                lastName,
            },
            email,
            password: hashedPassword,
            phone,
        });
        try {
            if (newUser) {
                generateToken(newUser._id, res);
                const savedUser = await newUser.save();
                if (savedUser) {
                    res.status(201).json({ message: "User registered successfully", savedUser });
                } else {
                    res.status(400).json({ message: "User registration failed" });
                }
            } else {
                res.status(400).json({ message: "User registration failed" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error registering user", error });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const normalUser = await NormalUser.findOne({ email });
        if (!normalUser) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bycrypt.compare(password, normalUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate token
        generateToken(normalUser._id, res);

        // Send response
        res.status(200).json({ message: "Login successful", normalUser });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

export const Logout = async (req, res) => {
    try {
        res.cookie("jwt", "", {
            maxAge: 0,
            httpOnly: true,
            sameSite: "strict",
        });
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

export const updateProfile = async (req, res) => {
    const { firstName, lastName, email, phone } = req.body;
    const userId = req.params.id;

    if (req.user._id == userId) {
        const errorMsg = checkFieldValidation(firstName, lastName, email, phone);

        if (errorMsg) {
            return res.status(400).json({ message: errorMsg });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({ message: "Email must be a valid Gmail address" });
        }

        try {
            const user = await NormalUser.findById(userId);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            const updatedUser = await NormalUser.findByIdAndUpdate(
                userId,
                { name: { firstName, lastName }, email, phone },
                { new: true }
            );

            res.status(200).json({ message: "Profile updated successfully", updatedUser });
        } catch (error) {
            res.status(500).json({ message: "Server error", error });
        }
    } else {
        return res.status(403).json({ message: "You are not authorized to update this profile" });
    }
}
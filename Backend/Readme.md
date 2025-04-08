# Backend Models Documentation

This document provides an overview of all the models used in the backend, along with their descriptions and entity constraints.

---

## 1. **Message Model**
- **Description**: Represents messages exchanged between users.
- **Fields**:
  - `sender`: Reference to `NormalUser`, required.
  - `receiver`: Reference to `NGOUser`, required.
  - `image`: String, required.
  - `text`: String, required.
- **Constraints**:
  - `sender` and `receiver` must be valid ObjectIds referencing existing users.
  - `image` must be a valid URL or file path.
  - `text` must not be empty.

---

## 2. **Address Model**
- **Description**: Stores address details for users and NGOs.
- **Fields**:
  - `user_id`: Reference to `NormalUser`.
  - `ngo_id`: Reference to `NGOUser`.
  - `Line_1`: String, required, min 10, max 100.
  - `Line_2`: String, required, min 10, max 100.
  - `city`: String, required.
  - `state`: String, required.
  - `pin_code`: String, required.
- **Constraints**:
  - Either `user_id` or `ngo_id` must be provided.
  - `Line_1` and `Line_2` must have a length between 10 and 100 characters.
  - `pin_code` must be a valid postal code.

---

## 3. **Food Model**
- **Description**: Represents food details for donation events.
- **Fields**:
  - `event_id`: Reference to `Event`, required.
  - `food_type`: String, required, enum: `['veg', 'non-veg']`.
  - `food_count`: Number, required, min 10, max 1000.
  - `food_availability_time`: Date, required (default: current time + 12 hours).
- **Constraints**:
  - `event_id` must reference a valid `Event`.
  - `food_type` must be either `veg` or `non-veg`.
  - `food_count` must be between 10 and 1000.

---

## 4. **Location Model**
- **Description**: Stores location details for events.
- **Fields**:
  - `event_id`: Reference to `Event`, required.
  - `venue_name`: String, required, min 3, max 100.
  - `pin_code`: Number, required.
  - `state`: String, required.
  - `city`: String, required.
  - `line_1`: String, required, min 10, max 100.
  - `line_2`: String, required, min 10, max 100.
- **Constraints**:
  - `event_id` must reference a valid `Event`.
  - `venue_name` must have a length between 3 and 100 characters.
  - `pin_code` must be a valid postal code.

---

## 5. **Event Model**
- **Description**: Represents events organized by users or NGOs.
- **Fields**:
  - `user_id`: Reference to `NormalUser`, required.
  - `type_of_org`: String, required, enum: `['NGO', 'Corporate', 'Individual', 'Others']`.
  - `event_type`: String, required, enum: `['Food Donation', 'Clothing Drive', 'Blood Donation', 'Awareness Campaign', 'Others']`.
- **Constraints**:
  - `user_id` must reference a valid `NormalUser`.
  - `type_of_org` and `event_type` must match the allowed enum values.

---

## 6. **NGO User Model**
- **Description**: Represents NGO user details.
- **Fields**:
  - `name`: Object containing:
    - `firstName`: String, required, min 3.
    - `lastName`: String, required, min 3.
  - `email`: String, required, unique.
  - `password`: String, required, min 8.
- **Constraints**:
  - `email` must be unique and a valid email format.
  - `password` must have at least 8 characters.

---

## 7. **NGO Details Model**
- **Description**: Stores additional details about NGOs.
- **Fields**:
  - `ngo_id`: Reference to `NGOUser`, required.
  - `ngo_name`: String, required, min 6.
  - `registration_no`: String, required, unique.
  - `since`: String, required.
  - `ngo_types`: String, required, enum: `['Health', 'Education', 'Environment', 'Animal Welfare', 'Poverty Alleviation']`.
  - `no_of_members`: Number, required.
  - `certificates`: Object containing:
    - `certificate_1`: String, required.
    - `certificate_2`: String, required.
    - `certificate_3`: String, required.
  - `picture`: String, required.
- **Constraints**:
  - `ngo_id` must reference a valid `NGOUser`.
  - `registration_no` must be unique.
  - `ngo_types` must match the allowed enum values.

---

## 8. **Feedback Model**
- **Description**: Represents feedback on posts.
- **Fields**:
  - `post_id`: Reference to `Post`, required.
  - `comments`: String, min 10, max 500.
  - `Like`: Number, default 0.
- **Constraints**:
  - `post_id` must reference a valid `Post`.
  - `comments` must have a length between 10 and 500 characters.

---

## 9. **Normal User Model**
- **Description**: Represents normal user details.
- **Fields**:
  - `name`: Object containing:
    - `firstName`: String, required, min 3.
    - `lastName`: String, required, min 3.
  - `email`: String, required, unique.
  - `password`: String, required, min 8.
  - `phone`: Number, required, min 10, max 10.
- **Constraints**:
  - `email` must be unique and a valid email format.
  - `phone` must be exactly 10 digits.

---

## 10. **Post Model**
- **Description**: Represents posts created by users or NGOs.
- **Fields**:
  - `ngo_id`: Reference to `NGOUser`.
  - `user_id`: Reference to `NormalUser`.
  - `title`: String, required, min 30, max 100.
  - `description`: String, required, min 100, max 500.
  - `pic`: String, required.
- **Constraints**:
  - `title` must have a length between 30 and 100 characters.
  - `description` must have a length between 100 and 500 characters.
  - `pic` must be a valid URL or file path.

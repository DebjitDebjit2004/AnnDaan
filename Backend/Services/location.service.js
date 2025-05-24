export const locationApi = async(pincode) => {
    const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    let address = [];
    if (data[0].Status === 'Success') {
        const locations = data[0].PostOffice;
        locations.forEach(location => {
            address.push(location.Name);
            address.push(location.District);
            address.push(location.Region);
            address.push(location.State);
        });
    } else {
        return "No location found"
    }
    return address;
}
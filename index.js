const car = {
    make: 'BMW',
    model: 'X5',
    manufactureYear: 2021,
    avgSpeed: 120,
};

function showCarInfo(car) {
    console.log(`Make: ${car.make}`);
    console.log(`Model: ${car.model}`);
    console.log(`Manufacture Year: ${car.manufactureYear}`);
    console.log(`Average Speed: ${car.avgSpeed} km/h`);
}

function computeTravelTime(distance) {
    const drivingTimeHours = distance / car.avgSpeed;
    const breaks = Math.floor(drivingTimeHours / 4);
    const totalTime = drivingTimeHours + breaks;
    return totalTime;
}

showCarInfo(car);
const tripDistance = 600;
const travelTime = computeTravelTime(tripDistance);
console.log(`Travel time for ${tripDistance} km: ${travelTime.toFixed(2)} hours`);

function distance_km(θ1, φ1, θ2, φ2) {
  const k = Math.cos((θ1 + θ2) * (Math.PI / 360));
  const y = ((0.00960 * k * k - 1.14170) * k * k + 111.69930) * (θ1 - θ2);
  const x = ((0.00192 * k * k - 0.38060) * k * k + 111.69938) * k * (φ1 - φ2);
  return Math.sqrt(x * x + y * y);
}

function assert_distance_km(θ1, φ1, θ2, φ2, km) {
  if(!(Math.abs(distance_km(θ1, φ1, θ2, φ2) - km) <= 0.1)) {
    throw new Error(`Expected ${actual} to be ${expected}±${tol}`);
  }
}

assert_distance_km(40.71, -74.01, 42.36, -71.06, 306.868); // New York → Boston
assert_distance_km(40.71, -74.01, 39.95, -75.16, 129.121); // New York → Philadelphia
assert_distance_km(42.36, -71.06, 39.95, -75.16, 435.880); // Boston → Philadelphia

function distance_sq_km(θ1, φ1, θ2, φ2) {
  const v = Math.cos((Math.PI / 360) * (θ1 + θ2));
  const w = v * v;
  const θ = ((0.00960 * w - 1.14170) * w + 111.69930)     * (θ1 - θ2);
  const φ = ((0.00192 * w - 0.38060) * w + 111.69938) * v * (φ1 - φ2);
  return θ * θ + φ * φ;
}

function distance_km(θ1, φ1, θ2, φ2) {
  return Math.sqrt(distance_sq_km(θ1, φ1, θ2, φ2));
}

function assert_distance_km(θ1, φ1, θ2, φ2, expected_km) {
  const actual_km = distance_km(θ1, φ1, θ2, φ2);
  if(!(Math.abs(actual_km - expected_km) <= 0.1)) {
    throw new Error(`Expected ${actual_km} to be ${expected_km}±0.1`);
  }
}

assert_distance_km(40.71, -74.01, 42.36, -71.06, 306.868); // New York → Boston
assert_distance_km(40.71, -74.01, 39.95, -75.16, 129.121); // New York → Philadelphia
assert_distance_km(42.36, -71.06, 39.95, -75.16, 435.880); // Boston → Philadelphia
assert_distance_km(51.51,  -0.13, 48.86,   2.35, 343.841); // London → Paris

export {distance_km, distance_sq_km};

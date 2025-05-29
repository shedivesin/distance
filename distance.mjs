function distance_km(θ1, φ1, θ2, φ2) {
  const cos1 = Math.cos((θ1 + θ2) * (Math.PI / 360));
  const cos2 = cos1 * cos1 * 2 - 1;
  const cos3 = cos2 * cos1 * 2 - cos1;
  const cos4 = cos3 * cos1 * 2 - cos2;
  const cos5 = cos4 * cos1 * 2 - cos3;
  const y = (111.13209        - 0.56605 * cos2 + 0.00120 * cos4) * (θ1 - θ2);
  const x = (111.41513 * cos1 - 0.09455 * cos3 + 0.00012 * cos5) * (φ1 - φ2);
  return Math.sqrt(x * x + y * y);
}

function assert_distance_km(θ1, φ1, θ2, φ2, km) {
  if(!(Math.abs(distance_km(θ1, φ1, θ2, φ2) - km) <= 0.1)) {
    throw new Error(`Expected ${actual} to be ${expected}±${tol}`);
  }
  assert_close_to(distance_km(θ1, φ1, θ2, φ2), km, 0.1);
}

assert_distance_km(40.71, -74.01, 42.36, -71.06, 306.868); // New York → Boston
assert_distance_km(40.71, -74.01, 39.95, -75.16, 129.121); // New York → Philadelphia
assert_distance_km(42.36, -71.06, 39.95, -75.16, 435.880); // Boston → Philadelphia

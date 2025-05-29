# Distance
This little JavaScript module calculates the distance between two latitudes and
longitudes [using the approximate formula given by the FCC][1]. It is extremely
fast and pretty accurate, but only suitable for points that are less than 475km
apart.

[1]: https://www.ecfr.gov/current/title-47/chapter-I/subchapter-C/part-73/subpart-B/section-73.208

You may notice the formula in the code doesn't look very much like the one
referenced above. First, I converted `cos(2ML)`, `cos(3ML)`, `cos(4ML)`, and
`cos(5ML)` into cheaper-to-compute variants using [Chebyshev polynomials][2].
I then plugged those in and simplified the resulting equations.

[2]: https://en.wikipedia.org/wiki/Chebyshev_polynomials

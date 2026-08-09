#set document(title: "Sample Document")

= Waves on a Lattice

When a disturbance travels through a discrete medium, its dispersion
relation departs from the continuum limit. The angular frequency
$omega$ of a wave with wavenumber $k$ on a chain of coupled oscillators
satisfies

$ omega(k) = 2 sqrt(kappa / m) abs(sin((k a) / 2)) $

which reduces to the linear relation $omega approx c k$ for small $k a$.

== Parameters

#table(
  columns: 3,
  table.header[Symbol][Meaning][Unit],
  [$kappa$], [coupling stiffness], [N/m],
  [$m$], [oscillator mass], [kg],
  [$a$], [lattice spacing], [m],
)

The group velocity #footnote[The velocity at which the envelope of a wave
packet propagates.] vanishes at the zone boundary $k = pi / a$.

== Numerical check

```python
import math

def omega(k, kappa=1.0, m=1.0, a=1.0):
    return 2 * math.sqrt(kappa / m) * abs(math.sin(k * a / 2))
```

== Phase portrait

#html.frame(circle(radius: 28pt, stroke: 1.5pt, fill: none))

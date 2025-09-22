#!/usr/bin/env perl

use strict;
use warnings;

my %Formula1Team = (
  name    => "McLaren",
  engine  => "Mercedes",
  drivers => ["Lando Norris", "Oscar Piastri"],
  championships => {
    drivers => [1974, 1976, 1984, 1985, 1986, 1988, 1989, 1990, 1991, 1998, 1999, 2008],
    constructors =>[1974, 1984, 1985, 1988, 1989, 1990, 1991, 1998, 2024]
  }
)
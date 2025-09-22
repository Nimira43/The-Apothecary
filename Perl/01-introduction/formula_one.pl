#!/usr/bin/env perl

use strict;
use warnings;

my %Formula1Team = (
  name    => "McLaren",
  engine  => "Mercedes",
  drivers => ["Lando Norris", "Oscar Piastri"],
  championships => {
    drivers => [1974, 1976, 1984, 1985, 1986, 1988, 1989, 1990, 1991, 1998, 1999, 2008],
    constructors =>[1974, 1984, 1985, 1988, 1989, 1990, 1991, 1998, 2024],
  },
  stats => {
    grands_prix => 991,
    wins => 201,
    poles => 173,
    fastest_laps => 182,
    podiums => 551,
    points => 7580.5,
  },
  championship_partners => {
    driver => [
      {
        name => "Emerson Fittipaldi",
        nationality => "Brazilian",
        mclaren_championships => [1974],
      },
      {
        name => "James Hunt",
        nationality => "British",
        mclaren_championships => [1976],
      },
      {
        name => "Niki Lauda",
        nationality => "Austrian",
        mclaren_championships => [1984],
      },
      {
        name => "Alain Prost",
        nationality => "French",
        mclaren_championships => [1985, 1986, 1989],
      },
      {
        name => "Ayrton Senna",
        nationality => "Brazilian",
        mclaren_championships => [1988, 1990, 1991],
      },
      {
        name => "Mika Hakkinen",
        nationality => "Finnish",
        mclaren_championships => [1998, 1999],
      },
      {
        name => "Lewis Hamilton",
        nationality => "British",
        mclaren_championships => [2008],
      },
    ],
    engine => [
      {
        name => "Ford",
        nationality => "American",
        mclaren_championships => {
          drivers => [1974, 1976],
          constructors => [1974],
        },
      },
      {
        name => "TAG",
        nationality => "German",
        mclaren_championships => {
          drivers => [1984, 1985, 1986],
          constructors => [1984, 1985],
        },
      },
      {
        name => "Honda",
        nationality => "Japanese",
        mclaren_championships => { 
          drivers => [1988, 1989, 1990, 1991],
          constructors => [1988, 1989, 1990, 1991],
        },
      },
      {
        name => "Mercedes",
        nationality => "German",
        mclaren_championships => { 
          drivers => [1998, 1999, 2008],
          constructors => [1998, 2024],
        },
      },
    ]
  }
)


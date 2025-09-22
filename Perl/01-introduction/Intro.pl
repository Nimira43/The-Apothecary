#!/usr/bin/env perl

use strict;
use warnings;

my $name = "Perl";
print("Hello to the $name World!\n");

# Comments
# this is a comment
=begin
This 
is 
a 
multi 
line 
comment
=cut
=pod
This is another
multi line
comment
=cut

# Scalar Variables
my $num1 = 34;
my $num2 = 25;
print $num1 + $num2 . "\n";
print("The sum of $num2 plus $num1 is " . ($num1 + $num2) . "\n");

print("Coercion\n");
my $string_number = "85";
print $num1 + $string_number . "\n";

my $string1 = "Orange";
my $string2 = "Apple";
my $string3 = "Orange";
# print $num1 + $string1 . "\n";

print("Maths Operations\n");
print $num1 + $num2 . "\n";
print $num1 / $num2 . "\n";
print $num1 - $num2 . "\n";
print $num1 * $num2 . "\n";

print("Comparisons\n");
print $num1 > $num2 . "\n";
print $num1 < $num2 . "\n";
print $num2 == $num1 . "\n";
print $num1 % $num2 . "\n";
print $string1 == $string1 . "\n";
print $string1 == $string2 . "\n";
print $string1 == $string3 . "\n";

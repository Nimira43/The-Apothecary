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

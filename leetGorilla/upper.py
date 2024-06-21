import sys

#line = sys.stdin.readline()

line = "asxs AAA ASXSAX Cvccacc caca"

x = line.split()
out = [t.upper() for t in x]

for a in out:
    a= a[0].lower(  ) + a[1:]
    print(a, end = " ")
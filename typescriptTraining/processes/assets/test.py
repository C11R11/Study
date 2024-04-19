import sys
import time
 
def print_to_stdout(*a):
 
    # Here a is the array holding the objects
    # passed as the argument of the function
    print(*a, file = sys.stdout)
 
print_to_stdout("Hello World")

import sched, time
s = sched.scheduler(time.time, time.sleep)
def do_something(sc): 
    print_to_stdout("Printed immediately.")
    # do your stuff
    #s.enter(2, 1, do_something, (sc,))

s.enter(2, 1, do_something, (s,))
s.enter(3, 1, do_something, (s,))
s.enter(1, 1, do_something, (s,))
s.run()

""" print_to_stdout("Printed immediately.")
time.sleep(2.4)
print_to_stdout("Printed after 2.4 seconds.")
time.sleep(2)
print_to_stdout("Printed after 2 seconds.")
time.sleep(1)
print_to_stdout("Printed after 1 seconds.")
time.sleep(5)
print_to_stdout("Printed after 5 seconds.")
time.sleep(3)
print_to_stdout("Printed after 3 seconds.")
time.sleep(4)
print_to_stdout("Printed after 4 seconds.") """
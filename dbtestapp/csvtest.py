#!/usr/bin/python

import csv
from dbtestapp.models import*


f = open('safeR.csv')
print("open")
rdr = csv.reader(f)

next(rdr)
for i in range(1,10):
	sptest = next(rdr)
	print(sptest)

f.close()

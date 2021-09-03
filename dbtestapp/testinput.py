#!/usr/bin/python
import dbtestapp.models as dm


print('testinput')
board = dm.Boards.get(id=3)
print(board)
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

    def __del__(self):
        print(self.data, '삭제')

class List:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def printlist(self):
        if not self.head:  # 공백 리스트인지 체크
            return
        cur = self.head
        print('[', end=' ')
        while cur:
            print(cur.data, end=' ')
            cur = cur.next
        print(']')

    def insertlast(self, node):
        if not self.head:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = node
        self.size += 1

    def insertfirst(self, node):
        if not self.head:
            self.head = node
            self.tail = node
        else:
            node.next = self.head
            self.head = node
        self.size += 1

    def deletelast(self):
        if not self.head:
            return
        else:
            prev, cur = None, self.head
            while cur.next:
                prev = cur
                cur = cur.next
            if not prev:
                self.head = None
            else:
                self.tail = prev
                prev.next = None

            del cur
            self.size -= 1

    def deletefirst(self):
        if not self.head:
            return
        cur = self.head
        if self.head == self.tail:
            self.head = self.tail = None
        else:
            self.head = cur.next
        del cur
        self.size -= 1

    def insertAt(self, idx, node):  # idx = 삽입할 위치, node = 삽입할 노드
        if not self.head:
            self.head = self.tail = node
        else:
            prev, cur = None, self.head
            while idx > 0 and cur:
                prev = cur
                cur = cur.next
                idx -= 1

            if not prev:
                node.next, self.head = cur, node
            elif not cur:
                prev.next, self.tail = cur, node
            else:
                node.next = cur
                prev.next = node
            self.size += 1

    def deleteAt(self, idx):
        if not self.head:
            return
        else:
            prev, cur = None, self.head
            while idx > 0 and cur:
                prev = cur
                cur = cur.next
                idx -= 1

            if not prev:
                self.head = cur.next
            elif not cur:
                prev.next, self.tail = None, prev
            else:
                prev.next = cur.next
            self.size -= 1

            del cur
            self.size -= 1
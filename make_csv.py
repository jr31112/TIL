students = {
    '01' : {
        '순번' : '01',
        '이름' : '김성훈'
    },
    '02' : {
        '순번' : '02',
        '이름' : '김은정'
    }
}


'''
with open('a.csv', 'w', encoding='utf-8') as f:
    f.write('number, name\n')
    for number, name in sutdents.items():
        f.write(f'{number}, {name}\n')
'''
import csv
with open('a.csv', 'w', encoding='utf-8') as f:
    fieldnames = ['순번', '이름']
    csv_writer = csv.DictWriter(f, fieldnames=fieldnames)
    csv_writer.writeheader()
    for item in students.values():
        csv_writer.writerow(item)
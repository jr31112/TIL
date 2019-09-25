# 분할 정복

## 1. 병합 정렬(merge sort)

```python
def mergeSort(arr):
    if len(arr) <= 1:
        return arr
    mid = int(len(arr) / 2)
    left = arr[:mid]
    right = arr[mid:]

    left = mergeSort(left)
    right = mergeSort(right)

    result = []
    while len(left) > 0 and len(right) > 0:
        if left[0] < right[0]:
            result.append(left.pop(0))
        else:
            result.append(right.pop(0))
    if len(left) > 0:
        result += left
    else:
        result += right
    return result
```

```python
def mergeSort(lo, hi):
    if lo >= hi:
        return

    mid = (lo + hi) >> 1
    mergeSort(lo, mid)
    mergeSort(mid + 1, hi)

    i, j, k = lo, mid + 1, lo
    while i <= mid and j <= hi:
        if arr[i] < arr[j]:
            sort[k] = arr[i]
            k, i = k + 1, i + 1
        else:
            sort[k] = arr[j]
            k, j = k + 1, j + 1
    while i <= mid:
        sort[k] = arr[i]
        k, i = k + 1, i + 1
    while j <= hi:
        sort[k] = arr[j]
        k, j = k + 1, j + 1
    for i in range(lo, hi + 1):
        arr[i] = sort[i]
```



## 2. 퀵 정렬(quick sort)

> 둘 다 비슷한 시간 복잡도를 지녔다.
>
> 취향에 맞는 알고리즘에 익숙해지자.

### 1. 일반적인 퀵 정렬

> 피봇 위치 가장 왼쪽에 위치
>
> 피봇이 어디에 있든 사용가능

```python
def quickSort(lo, hi)
	if lo >= hi: return
    i, j = lo, hi # arr[lo] : 피봇
    while i < j:
        while i <= hi and arr[lo] >= arr[i]: i += 1
        while arr[lo] < arr[j]:j -= 1
        if i < j:
            arr[i], arr[j] = arr[j], arr[i]
    arr[lo], arr[j] = arr[j], arr[li]
	quickSort(lo, j-1)
    quickSort(j+1, hi)
    
quickSort(0, len(arr)-1)
```

### 2. Lomuto partion

> 가장 오른쪽을 피봇으로 설정

```python
def partition(lo, hi):
    i = lo -1
    for j in range(lo, hi):
        if arr[j] < arr[hi]:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    i += 1
    arr[i], arr[hi] = arr[hi], arr[i]
    partition(lo, i-1)
    partition(i+1, hi)
```


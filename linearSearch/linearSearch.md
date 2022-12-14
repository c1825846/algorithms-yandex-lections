# Линейный поиск

Линейный поиск - способ поиска, когда перебираются все элементы.

Сложность: O(N)

Обычно ищут "подходящий" или "наиболее подходящий элемент".

## Задача 1

Дана последовательность чисел длиной N.

Найти первое (левое) вхождение положительного числа X в неё или вывести -1, если число X не встречалось.

## Задача 2

Дана последовательность чисел длиной N.

Найти последнее (правое) вхождение положительного числа X в неё или вывести -1, если число X не встречалось.

## Задача 3

Дана последовательность чисел длиной N (N>0).

Найти максимальное число в последовательности.

В решении 3, происходит копирование элемента, это можно оптимизировать, запоминая не сам элемент, а индекс. Оптимизированое решение 31

## Задача 4

Дана последовательность чисел длиной N (N>0).

Найти максимальное число в последовательности и второе по величине число (такое, которое будет максимальным, если вычеркнуть из последовательности первое максимальное).

## Задача 5

Дана последовательность чисел длиной N.

Найти минимальное чётное число в последовательности или вывести -1, если такого не существует.

## Задача 6 

Дана последовательность слов.

Вывести все самые короткие слова через пробел.

Оптимально будет собрать слова в массив, а потом объеденить их через join.
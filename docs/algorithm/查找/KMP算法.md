# KMP算法

## 算法介绍

KMP 算法就是在试图寻找一种规律：在模式串和主串匹配的过程中，当遇到坏字符后，对于已经比对过的好前缀，能否找到一种规律，将模式串一次性滑动很多位

## next数组

next数组含义：当前元素比较失败时，应该回退到哪个元素进行比较

> 约定：模式串的索引下标从1开始而不是从0开始，若下标从0开始则首字符的next数组值为-1

next数组求值流程：

- 找不包含当前字符的子串的最大公共前后缀子串
- next数组的值为长度+1

我们以字符串 `ababacd`为例，模拟一遍构建next数组的流程：

| 字符 | 索引 | 比较过程                        | next数组值 |
| ---- | ---- | ------------------------------- | ---------- |
| a    | 1    | 首字符无脑写0                   | 0          |
| b    | 2    | 第二个字符无脑写1               | 1          |
| a    | 3    | ab最大相等的前后缀子串为`null`  | 1          |
| a    | 4    | aba最大相等的前后缀子串为`a`    | 2          |
| b    | 5    | abaa最大相等的前后缀子串为`a`   | 2          |
| c    | 6    | abaab最大相等的前后缀子串为`ab` | 3          |

## nextval数组

我们发现，若跳转后的字符和当前字符相同的话，则跳转是没太大意义的，因此我们可以提前完成多次跳转，迭代得到next数组应该直接跳转的位置，即nextval数组
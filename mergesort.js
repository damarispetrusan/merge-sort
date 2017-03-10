{\rtf1\ansi\ansicpg1252\cocoartf1348\cocoasubrtf170
{\fonttbl\f0\fswiss\fcharset0 ArialMT;}
{\colortbl;\red255\green255\blue255;\red26\green26\blue26;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720

\f0\fs26 \cf2 \expnd0\expndtw0\kerning0
var a = [34, 203, 3, 746, 200, 984];\
console.log(mergeSort(a));\
\
function mergeSort(a) \{\
	if (a.length<2)\{\
\'a0 	return a;\
\'a0 \} else \{\
\'a0   var mijloc = a.length/2;\
\'a0 \'a0 var stanga = a.slice(0,mijloc);\
\'a0 \'a0 var dreapta = a.slice(mijloc, a.length)\
console.log(arr)\
\'a0 \}\
\'a0 return merge(mergeSort(stanga), mergeSort(dreapta));\
\}\
\
function merge (s,d)\{\
	var result = [];\
\'a0 while(s.length && d.length) \{\
\'a0 	if(s[0] <= d[0])\{\
\'a0 \'a0 result.push(s.shift());\
\'a0 \'a0 \} else \{\
\'a0 \'a0 \'a0result.push(d.shift());\
\'a0 \'a0 \}\
\'a0 \}\'a0\
\'a0 \'a0while (s.length)\{\
\'a0 		result.push(s.shift());\
\'a0 \}\'a0\
\'a0 while (d.length)\{\
\'a0 		result.push(d.shift());\
\'a0 \}\
\'a0 return result;\
\}\
\
}
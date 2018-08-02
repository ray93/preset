## 集控接口文档
- [集控接口文档](#集控接口文档)
  - [切换预案](#切换预案)
  - [切换信号源](#切换信号源)
  - [临时开窗](#临时开窗)
  - [关闭窗口](#关闭窗口)
  - [暂停轮播](#暂停轮播)
  - [继续轮播](#继续轮播)

### 切换预案

**请求URL：**

- ` /switchPreset `

**请求方式：**

- POST 

**参数：** 

|参数名|必选|类型|说明|
|:---:|:--:|:--:|:-:|
|presetName |是  |string |预案名称   |

 **请求参数**

 ```json
 { 
    "presetName" : "preset02" 
 } 
 ```


 **返回参数**

```json
{
  "success": true,
  "uri": "http://10.0.0.252:8899/api/v1/presets/preset02",
  "messages": [
    "Action [清空墙], executed successfully!",
    "Action [延迟50]：  executed successfully!",
    "Action [调用预案交互双屏], executed successfully!",
    "Action [关屏], executed successfully!",
    "Action [关灯], executed successfully!"
  ]
}
```

---
### 切换信号源

**请求URL：**

- ` /switchSource `

**请求方式：**

- POST 

**参数：** 

|参数名|必选|类型|说明|
|:---:|:--:|:--:|:-:|
|presetName |是  |string |预案名称   |
|windowID |是  |string |窗口ID   |
|sourceID |是  |string[] |信号源ID数组   |

 **请求参数**

 ``` json
{
  "presetName": "preset01",
  "source": [
    {
      "windowID": "window01",
      "sourceID": ["source02","source03"]
    },
    {
      "windowID": "window02",
      "sourceID": ["source04"]
    }
  ]
}
 ```


 **返回参数**

```
//待添加
```

---
### 临时开窗

**请求URL：**

- ` /openTemWindow `

**请求方式：**

- POST 

**参数：** 

|参数名|必选|类型|说明|
|:---:|:--:|:--:|:-:|
|x |是  |string |x坐标 |
|y |是  |string |y坐标 |
|width |是  |string |宽|
|height |是  |string |高|
|source |是  |string |信号ID|

 **请求参数**

```json
{
  "x": 0,
  "y": 0,
  "width": 960,
  "height": 540,
  "source": "source07"
}
 ```

 **返回参数**

```json
{
  "success": true,
  "uri": "http://10.0.0.252:8899/api/v1/walls/KFWall/windows/window",
  "messages": [
    "Add new window [source=HK-IPC, x=0,y=0,width=960,height=540]"
  ]
}
```

---

### 关闭窗口

**请求URL：**

- ` /closeWindow `

**请求方式：**

- POST 

**参数：** 

|参数名|必选|类型|说明|
|:---:|:--:|:--:|:-:|
|x |是  |string |x坐标 |
|y |是  |string |y坐标 |
|width |是  |string |窗口宽度 |
|height |是  |string |窗口高度 |

 **请求参数**

 ```json
{
  "x": 0,
  "y": 0,
  "width": 960,
  "height": 540
}
 ```


 **返回参数**

```json
{
  "success": true,
  "uri": "http://10.0.0.252:8899/api/v1/walls/KFWall/windows/window",
  "messages": [
    "Delete window at [source=HK-IPC, x=0,y=0,width=960,height=540]"
  ]
}
```


---
### 暂停轮播

**请求URL：**

- ` /pauseCarousel `

**请求方式：**

- POST 

 **返回参数**

```
//待添加
```


---
### 继续轮播

**请求URL：**

- ` /continueCarousel `

**请求方式：**

- POST 

 **返回参数**

```
//待添加
```
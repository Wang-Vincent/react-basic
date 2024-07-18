// import logo from './logo.svg';
// import './App.css';
//根组件 // App -> index.js -> public/index.html(root)

import { useContext, useState } from 'react'
import './index.css'
import './App.scss'
import avatar from './images/bozai.png'
import avatar1 from './images/bozai.png'
import _, { set } from 'lodash'
import classNames from 'classnames'
import { useRef } from 'react';
import { v4 as uuidV4 } from 'uuid';
import dayjs from 'dayjs';
import { createContext } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

/*  p5 声明表达式
1.使用引号传递字符串
2.使用JavaScript变量
3.函数调用和方法调用
4.使用JavaScript对象 */

//注意:if语句、switch语句、变量声明属于语句，不是表达式，不能出现在{}中

const message='this is message 1'
const count= 100
function getName(){
  console.log('this is getName')
  return 'name'
}

//p6 列表

const list =[
  { id: 1001,name:'P6Vue'},
  { id: 1002,name:'P6React'},
  { id: 1003,name:'P6Angular'}
]

//p7 简单条件渲染

const isTrue = true
const isFalse = false

// p8 复杂条件渲染
// 定义文章类型
const articleType1=1
const articleType2=2
const articleType3=3

//定义核心函数(根据文章类型返回不同的JSX模版)

function getArticleTemplate(articleType){
  if(articleType===articleType1){
    return <div>我是无图文章rticleType1</div>
  }else if(articleType===articleType2){
    return <div>我是单图模式articleType2</div>
  }else if(articleType===articleType3){
    return <div>我是三图模式articleType3</div>
  }else{
    return <div>我是none of above</div>
  }
}


//p9 事件绑定
const handleClickMessage = "handleClickMessage"

const handleClick = () => {
  console.log('handleClick')
  // return <div>handleClickMessage</div> not workin
}

//事件参数e
const handleEventClick = (e) => {
  console.log('handleEventClick', e)
}

//传递自定义参数
const handleParamClick = (param) => {
  console.log('handleParaParamClick', param)
}

//both e and param
const handleBothClick = (e, param) => {
  console.log('handleBothClick', e, param)
}

//p10 react 组件

const Button1 = () => {
  return <button>Button1</button>
}

//p13 style

const style1 = {
  color: 'white',
  backgroundColor: 'black',
  padding: '10px 20px',
  border: 'none',
}

//p14 style rendering

/**
 * 评论列表的渲染和操作
 *
 * 1. 根据状态渲染评论列表
 * 2. 删除评论
 */

// 评论列表数据
const defaultList = [
  {
    // 评论id
    rpid: 3,
    // 用户信息
    user: {
      uid: '13258165',
      avatar: avatar1,
      uname: '周杰伦',
    },
    // 评论内容
    content: '哎哟，不错哦',
    // 评论时间
    ctime: '10-18 08:15',
    like: 188,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: avatar1,
      uname: '许嵩',
    },
    content: '我寻你千百度 日出到迟暮',
    ctime: '11-13 11:29',
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar,
      uname: '黑马前端',
    },
    content: '学前端就来黑马',
    ctime: '10-19 09:00',
    like: 66,
  },
]
// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}

/** p16
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */

// 导航 Tab 数组
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]

//p24 parent to child
//1 parent send
//2 child receive props param 参数 

function Son (props) {
  //props 对象里包含父组件传递过来的所有数据
  //{name: "父组件的数据"}
  console.log(props)
  return <div>this is son , {props.name}, jsx: {props.child}, {props.children}</div>
  //p25 不允许修改父组件传过来的数据，只读 data received from parent is read only
}

function SonTOFather ({ onGetSonMsg}) {
  //p27 child to parent 子传父 在子组件中调用父组件中的函数并传递实参
  const sonMsg = 'son Message'
  return(
    <div>return sonMessage
      <button onClick={()=>onGetSonMsg(sonMsg)}>sendMsg</button>
    </div>
  )
}

function SonToSonBro ({broName})
  //28 child to child 1 child to parent 2 parent to another child
  { return <div>Receiving child to child: {broName}</div> }

// p29 1 createContext 方法创建上下文对象 
const MessageContext = createContext()
//2 顶层组件 通过provider组件提供数据 
//3 底层组件 通过useContext hook function use data

function P29A () {
  return(
    <div>P29A component
      <P29B></P29B>
    </div>
  )
}

function P29B () {
  const msg = useContext(MessageContext)
  return(
    <div>P29B component: {msg}
    </div>
  )
}

//p32

function P32Conponent () {
  useEffect(()=>{
    const p32timer = setInterval(()=>{
      console.log('p32 mounted 定时器执行中 timer running')
    },1000)

    return () => {
      clearInterval(p32timer)
    }
  },[])

  return <div>P32 conponent</div>
}

//p33 customized hook
// 1 声明 initialize function starts with "use"
// 2 封装 encapsulation reusable logics
// 3 return obj or array from function 
// 4 use and unbox this function whenever the logic is needed

function useToggle () {
  const [boolean, setBoolean] = useState(true)
  const toggle = () => setBoolean(!boolean)
  return { boolean, toggle }
}

//p37 encapsul ui conponent (comments)
function UIItem ({ item,onDelete }) {
  
  return (<div className="reply-item" key={item.rpid}>
    {/* 头像 */}
    <div className="root-reply-avatar">
      <div className="bili-avatar">
        <img
          className="bili-avatar-img"
          alt=""
          src={item.user.avatar}
        />
      </div>
    </div>

    <div className="content-wrap">
      {/* 用户名 */}
      <div className="user-info">
        <div className="user-name">{item.user.uname}</div>
      </div>
      {/* 评论内容 */}
      <div className="root-reply">
        <span className="reply-content">{item.content}</span>
        <div className="reply-info">
          {/* 评论时间 */}
          <span className="reply-time">{item.ctime}</span>
          {/* 评论数量 */}
          <span className="reply-time">点赞数:{item.like}</span>

          {/* p15 删除功能实现，条件显示：uid相同才显示， onclick传id,filter掉*/}
          {user.uid === item.user.uid &&
          <span className="delete-btn" onClick={()=> onDelete(item.rpid)}>
            删除
          </span>}

        </div>
      </div>
    </div>
  </div>)
}


function App() {

  //p11 useState 数据驱动视图，记住不能放在top level
  //p12 always use setxxx() to change the view, other means can only change the data, not the view
const [p11State,setp11State]=useState(0)
let [p12State,setp12State]=useState(0)
const handleP11Click=()=>{
  if(p11State===0){
    setp11State(1)}
    else if(p11State===1){
    setp11State(0)}
}

const handleP12Click=()=>{
  if(p12State===0){
    p12State =1
    console.log(p12State)
  }
    else if(p12State===1){
      p12State =0
      console.log(p12State)
    }
}

//p14 style rendering 使用useState维护list
// const [commentList,setCommentList]=useState(defaultList)
// default order by hot
// const [commentList,setCommentList]=useState(_.orderBy(defaultList,'like','desc'))

//p35 useEffect get data from api


//p36 encapsulate commentList

function useGetP36List () {
  const [commentList, setCommentList] = useState([])

  useEffect(() => {
    //request data
    async function getP35List() {
      const res = await axios.get('http://localhost:3004/list')
      setCommentList(res.data)
    }
    getP35List()
  }, [])

  return {commentList, setCommentList}
}

const {commentList, setCommentList} = useGetP36List()


const handleDeleteComment = (rpid) => {
  console.log(rpid)
  const newList = commentList.filter((comment) => comment.rpid !== rpid)
  setCommentList(newList)
}


//p16 tab切换功能
//1.点击谁就把谁的type记录下来

const [activeTab, setActiveTab] = useState('hot')
const handleTabChange=(type) => {
  console.log(type)
  setActiveTab(type)

  //p17 基于列表排序 list order
  // lodash 排序
  if (type === 'hot') {
    // 点赞数量排序 
    // setCommentList([...commentList].sort((a, b) => b.like - a.like))
    setCommentList(_.orderBy(commentList, 'like', 'desc'))
  } else if (type === 'time') {
    // 创建时间排序
    // setCommentList([...commentList].sort((a, b) => new Date(b.ctime) - new Date(a.ctime)))
    setCommentList(_.orderBy(commentList, 'ctime', 'desc'))
  }
}

//2.通过记录的type和每一项遍历时的type做匹配 控制激活类名的显示


// p19 受控绑定表单

//1.声明一个react状态-useState
// 2.核心绑定流程
//1.通过value属性绑定react状态
// 2.绑定onChange事件 通过事件参数e拿到输入框最新的值 反向修改到react状态
//3.绑定onSubmit事件 通过事件参数e拿到输入框最新的值 反向修改到react状态
const [inputValue, setInputValue] = useState('')

// p20

// React中获取DOM
//1.通过ref属性绑定react状态
//2.dom可用时，ref.current获取dom
// 渲染完毕之后dom生成之后才可用
const inputRef = useRef()
const showDom = () => {
  console.log(inputRef)
  console.dir(inputRef.current)
  console.log(inputRef.current.value)
}

// p21 发表评论
const [content, setContent] = useState('')
// const handlePublish = () => {
//   const newComment = {
//     rpid: new Date().getTime(),
//     user,
//     content,
//     ctime: new Date().toLocaleString(),
//     like: 0,
//   }
//   setCommentList([...commentList, newComment])
//   setContent('')
// }

// p22 id time 处理

const handlePublish = () => {
  const newComment = {
    rpid: uuidV4(), //random id
    user,
    content,
    ctime: dayjs(new Date()).format("MM-DD hh:mm"), // 格式化 月-日 时：分
    like: 0,
  }
  setCommentList([...commentList, newComment])

  //p23 1 清空输入框内容 clear 2 重新聚焦 refocus dom(useRef) -focus
  setContent('')
  commentInputRef.current.focus()
}

//p23

const commentInputRef = useRef()

//p24

const name = 'p24 in app before return'


//p27

const getMsg = (msg) => {
  console.log(msg)
  setMsg(msg)
  setBrotherMsg(msg)
}

const [msg, setMsg] = useState('')

//p28

const [brotherMsg, setBrotherMsg] = useState('')

//p29

const p29msg = "p29 msg in app before return"

//p30 useEffect

const p30URL = 'http://geek.itheima.net/v1_0/channels'

const [p30List, setP30List] = useState([])

useEffect(()=>{
  console.log('useEffect run')
  // get channels
  async function getP30List(){
    const resP30 = await fetch(p30URL)
    const jsonResP30 = await resP30.json()
    console.log(jsonResP30)
    setP30List(jsonResP30.data.channels)
  }
  getP30List()
},[])

//p31 useEffect with dependency 依賴項

const [p31Count, setP31Count] = useState(0)
useEffect(()=>{
  console.log('useEffect run with no dependency(run at first and run when clicked)')
  document.title = `p31 count is ${p31Count}`
})

useEffect(()=>{
  console.log('useEffect run with empty array (run only once)')
  document.title = `p31 count is ${p31Count}`
},[])

useEffect(()=>{
  console.log('useEffect run with dependency (run when clicked)')
  document.title = `p31 count is ${p31Count}`
},[p31Count])



//p32 useEffect with cleanup 清除副作用

const [showP32, setShowP32] = useState(true)

//p33 customized hook

const { boolean, toggle } = useToggle()

//p34 �������组件通信

  return (
    <div className="App">
      <h1 style={style1}>this is title</h1>
      {message}
      {"string"}
      {count+1}
      {getName()}
      {new Date().toLocaleTimeString()}
      <div style={{width:100,height:100,backgroundColor:'red'}}>this is div</div>
      <ul> {/* 渲染列表 **/}
      {/* map 循环哪个结构 return结构 */}
      {/*注意事项:加上一个独一无二的key 字符串或者number id*/}
      {/*key的作用:React框架内部使用 提升更新性能的*/}
        {list.map(item1=>{
          return <li key={item1.id}>{item1.name}</li>
        })}
      </ul>

      <ul>
        {list.map(item1 => <li key={item1.id}>{item1.name}</li>)}
      </ul>

      {/*逻辑与 &&*/}
      {isTrue && <span>p7 this is true && 显示  </span>} {/*显示*/}
      {isFalse && <span>p7 this is false &&  </span>}
      {/*三元运算 */}
      {isTrue ?<span>p7 true 三元运算 isTrue 显示  </span> :<span>p7 false 三元运算 isTrue  </span>}
      {isFalse ?<span>p7 true 三元运算 isFalse  </span> :<span>p7 false 三元运算 isFalse 显示 </span>}

      {/*调用函数渲染不同的模版*/}{getArticleTemplate()}{getArticleTemplate(1)}{getArticleTemplate(2)}{getArticleTemplate(3)}

      {/*事件绑定*/}
        <button onClick={handleClick}>this is handleClick</button>
        {/* 事件参数e */}
        <button onClick={handleEventClick}>this is handleEventClick</button>
        {/* 传递自定义参数 */}
        <button onClick={()=>handleParamClick('param')}>this is handleParamClick</button>
        {/* both e and param */}
        <button onClick={(e)=>handleBothClick(e,'param')}>this is handleBothClick</button>

        {/* 组件 */}
        <Button1 />
        <Button1></Button1>

        {/* useState */}
        <button onClick={handleP11Click}>{p11State}</button>
        <button onClick={handleP12Click}>{p12State}</button>

        {/* p13 style */}
        <span className='blue'>blue style</span>


        {/* p14 style rendering */}
        <h1 style={style1}>this is p14</h1>
        {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {/* <span className='nav-item'>最新</span>
            <span className='nav-item'>最热</span> */}
            {/* {tabs.map(item => 
              <span
               key={item.type} 
               onClick={()=> handleTabChange(item.type)} 
               className={`nav-item ${activeTab === item.type && 'active'}`}>
                {item.text}
                </span>)} */}

                {/* p18 classnames 插件 */}
              {tabs.map(item =>
                <span
                  key={item.type}
                  onClick={()=> handleTabChange(item.type)}
                  className={classNames('nav-item', { active: activeTab === item.type })}>
                  {item.text}
                </span>)}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* p21 发布评论 */}
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
              ref={commentInputRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text" onClick={handlePublish}>发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          
          {/* 评论项 */}
          {commentList.map(item=>(
            <UIItem key={item.rpid} item={item} onDelete={handleDeleteComment}/>
          ))}

          {/* p19 */}
          <div>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">提交</button>
          </div>

          {/* p20*/}

          <div>
            <input type='text' ref={inputRef}/>
            <button onClick={showDom}>show</button>
          </div>
        </div>
      </div>

          {/* p24 parent to child 父子*/}
          <div>
            <Son 
            name={name}
            age={18}
            isTrue={false}
            obj={{name:"jack"}}
            cb={() => console.log('p25')}
            child={<span>child span p25</span>}
            >
              <span>p26 span</span>
            </Son>
          </div>

          <div>p27(son to father, child to parent) {msg}
            <SonTOFather onGetSonMsg={getMsg}/>
          </div>

          <div> <SonToSonBro broName={brotherMsg}/> p28  grandchildren?: {brotherMsg}
          </div>

          <div> p29 useContext 

            <MessageContext.Provider value={p29msg}>Msg Context Provider
              <P29A/>
            </MessageContext.Provider>
          </div>

          <div> p30 useEffect
              <ul>
                {p30List.map(item=>(
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
          </div>

          <div>p31 useEffect with dependency 依赖项
            <p>{p31Count}</p>
            <button onClick={()=> setP31Count(p31Count+1)}>add{p31Count}</button>
          </div>

          <div>p32 useEffect with cleanup
            <div>
              {showP32 && <P32Conponent/>}
            <button onClick={()=> setShowP32(false)}>delete p32 conponent</button>
            </div>
          </div>

          <div>
            p33 customized hook
            {boolean && <div>p33 toggle</div>}
            <button onClick={toggle}>toggle</button>
          </div>


      {/* {getName()} */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

<template>
  <n-flex v-bind="mainLayout" class="main-style">
    <n-flex vertical justify="space-between" class="personal-information-style" >
      <n-flex class="profile-wrapper">
        <component :is="motion.div" v-bind="profileMotion" class="profile-image">
          <n-image :src="profileImage" class="profile-image"/>
        </component>
        <component :is="motion.div" v-bind="nameMotion" class="name-text-style">
          <n-text class="name-text-style">{{ personalInformation.name }}</n-text>
        </component>
      </n-flex>
      <component :is="motion.div" v-bind="personalInformationCardMotion" class="personal-information-card-wrapper">
        <n-card class="personal-information-card-style">
          <n-flex vertical>
            <n-text class="personal-information-title-text-style">{{ personalInformation.basicInformationTitle }}</n-text>
            <n-divider class="personal-information-divider-style" />
            <n-flex v-for="tag in personalInformation.basicInformationList" :key="tag.tagText" >
              <n-text class="personal-information-text-style">{{ tag.tagText }}</n-text>
            </n-flex>
          </n-flex>
        </n-card>
      </component>
      <component :is="motion.div" v-bind="personalInformationCardMotion" class="personal-information-card-wrapper">
        <n-card class="personal-information-card-style">
          <n-flex vertical>
            <n-text class="personal-information-title-text-style">{{ personalInformation.professionalSkillTitle }}</n-text>
            <n-divider class="personal-information-divider-style" />
            <n-flex>
              <n-tag v-for="tag in personalInformation.professionalSkillList" :key="tag.tagText" class="professional-skill-tag-style">
                <n-text class="personal-information-text-style">{{ tag.tagText }}</n-text>
              </n-tag>
            </n-flex>
          </n-flex>
        </n-card>
      </component>
      <component :is="motion.div" v-bind="personalInformationCardMotion" class="personal-information-card-wrapper">
        <n-card class="personal-information-card-style">
          <n-flex vertical>
            <n-text class="personal-information-title-text-style">{{ personalInformation.contactInformationTitle }}</n-text>
            <n-divider class="personal-information-divider-style" />
            <n-flex v-for="tag in personalInformation.contactInformationList" :key="tag.tagText" >
              <n-text class="personal-information-text-style">{{ tag.tagText }}</n-text>
            </n-flex>
          </n-flex>
        </n-card>
      </component>
    </n-flex>
    <n-flex vertical class="personal-introduction-style">
      <n-flex vertical>
        <component :is="motion.div" v-bind="personalIntroductionDivideMotion" class="personal-information-card-wrapper">
          <n-divider title-placement="center" class="personal-introduction-divider-style" >
            <n-text class="personal-introduction-title-text-style">{{personalInformation.educationExperienceTitle}}</n-text>
          </n-divider>
        </component>
        <n-flex vertical v-for="educationExperience in personalInformation.educationExperienceList">
          <component :is="motion.div" v-bind="personalIntroductionCardMotion" class="personal-introduction-card-wrapper-style">
            <n-card :title="educationExperience.titleText" class="personal-introduction-card-style">
              <component :is="motion.div" v-bind="personalIntroductionCardTextMotion">
                <n-flex vertical>
                  <n-text v-for="content in educationExperience.contentTextList" class="personal-introduction-text-style">{{ content }}</n-text>
                </n-flex>
              </component>
            </n-card>
          </component>
        </n-flex>
        <component :is="motion.div" v-bind="personalIntroductionDivideMotion" class="personal-information-card-wrapper">
          <n-divider title-placement="center" class="personal-introduction-divider-style" >
            <n-text class="personal-introduction-title-text-style">{{personalInformation.personalSkillTitle}}</n-text>
          </n-divider>
        </component>
        <n-flex vertical v-for="personalSkill in personalInformation.personalSkillList">
          <component :is="motion.div" v-bind="personalIntroductionCardMotion" class="personal-introduction-card-wrapper-style">
            <n-card :title="personalSkill.titleText" class="personal-introduction-card-style">
              <component :is="motion.div" v-bind="personalIntroductionCardTextMotion">
                <n-flex vertical>
                  <n-text v-for="content in personalSkill.contentTextList" class="personal-introduction-text-style">{{ content }}</n-text>
                </n-flex>
              </component>
            </n-card>
          </component>
        </n-flex>
        <component :is="motion.div" v-bind="personalIntroductionDivideMotion" class="personal-information-card-wrapper">
          <n-divider title-placement="center" class="personal-introduction-divider-style" >
            <n-text class="personal-introduction-title-text-style">{{personalInformation.competitionExperienceTitle}}</n-text>
          </n-divider>
        </component>
        <n-flex vertical v-for="competitionExperience in personalInformation.competitionExperienceList">
          <component :is="motion.div" v-bind="personalIntroductionCardMotion" class="personal-introduction-card-wrapper-style">
            <n-card :title="competitionExperience.titleText" class="personal-introduction-card-style">
              <component :is="motion.div" v-bind="personalIntroductionCardTextMotion">
                <n-flex vertical>
                  <n-text v-for="content in competitionExperience.contentTextList" class="personal-introduction-text-style">{{ content }}</n-text>
                </n-flex>
              </component>
            </n-card>
          </component>
        </n-flex>
        <component :is="motion.div" v-bind="personalIntroductionDivideMotion" class="personal-information-card-wrapper">
          <n-divider title-placement="center" class="personal-introduction-divider-style" >
            <n-text class="personal-introduction-title-text-style">{{personalInformation.workTitle}}</n-text>
          </n-divider>
        </component>
        <component :is="motion.div" v-bind="personalIntroductionCardMotion" class="personal-introduction-card-wrapper-style">
          <n-card :title="personalInformation.workList[personalInformation.currentWorkIndex]?.title" class="personal-introduction-card-style">
            <iframe
                :src="personalInformation.workList[personalInformation.currentWorkIndex]?.src"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin"
                class="carousel-video-style"
            ></iframe>
            <n-flex justify="space-around">
              <n-button @click="personalInformation.turnToPreviousWork()" class="button-style">
                <n-text>上一个</n-text>
              </n-button>
              <n-button @click="personalInformation.turnToNextWork()" class="button-style">
                <n-text>下一个</n-text>
              </n-button>
            </n-flex>
            <n-text>{{ personalInformation.workList[personalInformation.currentWorkIndex]?.description }}</n-text>
          </n-card>
        </component>
      </n-flex>
    </n-flex>
  </n-flex>
</template>


<script setup lang="ts">
import { motion } from 'motion-v'
import { NFlex, NImage, NText, NTag, NDivider, NCard, NButton } from 'naive-ui'
import { ref, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'
import profileImage from './assets/image/profile.jpg'

const profileMotion = ref({
  initial: { x: 0, y: 0, scale: 0, opacity: 0, rotate: -180},
  whileInView: { x: 0, y: 0, scale: 1, opacity: 1 , rotate: 0},
  transition: { duration: 0.5, delay: 0 },
  whileHover: { y: -10, scale: 1.2, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)', rotate: 360}
})
const nameMotion = ref({
  initial: { x: 0, y: 0, scale: 0, opacity: 0, rotate: -180},
  whileInView: { x: 0, y: 0, scale: 1, opacity: 1 , rotate: 0},
  transition: { duration: 0.5, delay: 0 },
})
const personalInformationCardMotion = ref({
  initial: { x: 0, y: 150, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  transition: { duration: 0.5, delay: 0 },
  whileHover: { y: -10, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)'}
})
const personalIntroductionDivideMotion = ref({
  initial: { x: 0, y: 150, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  transition: { duration: 0.5, delay: 0 }
})
const personalIntroductionCardMotion = ref({
  initial: { x: 0, y: 150, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  transition: { duration: 0.5, delay: 0 },
  whileHover: { y: -10, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)'}
})
const personalIntroductionCardTextMotion = ref({
  initial: { x: 0, y: 0, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  transition: { duration: 0.5, delay: 0 }
})

const mainLayout = ref({
  vertical: false
})

const updateLayout = () => {
  mainLayout.value.vertical = window.innerWidth <= 600;
  if (mainLayout.value.vertical) {
    profileMotion.value.initial = {x: -150, y: 0, scale: 0, opacity: 0, rotate: -180}
    nameMotion.value.whileInView = {x: 0, y: 0, scale: 1, opacity: 1 , rotate: 0}

    nameMotion.value.initial = {x: -150, y: 0, scale: 0, opacity: 0, rotate: -180}
    nameMotion.value.whileInView = {x: 0, y: 0, scale: 1, opacity: 1 , rotate: 0}

    personalInformationCardMotion.value.initial = {x: -150, y: 0, opacity: 0}
    personalInformationCardMotion.value.whileInView = {x: 0, y: 0, opacity: 1}

    personalIntroductionDivideMotion.value.initial = {x: -150, y: 0, opacity: 0}
    personalIntroductionDivideMotion.value.whileInView = {x: 0, y: 0, opacity: 1}

    personalIntroductionCardMotion.value.initial = {x: -150, y: 0, opacity: 0}
    personalIntroductionCardMotion.value.whileInView = {x: 0, y: 0, opacity: 1}
  }
  else {
    profileMotion.value.initial = {x: 0, y: 0, scale: 0, opacity: 0, rotate: -180}
    nameMotion.value.initial = {x: 0, y: 0, scale: 0, opacity: 0, rotate: -180}
    personalInformationCardMotion.value.initial = {x: 0, y: 150, opacity: 0}
    personalIntroductionDivideMotion.value.initial = {x: 0, y: 150, opacity: 0}
    personalIntroductionCardMotion.value.initial = {x: 0, y: 150, opacity: 0}
  }
}

onMounted(() => {
  updateLayout()
  window.addEventListener('resize', updateLayout)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateLayout)
})

class CardInformation {
  titleText: string
  contentTextList: string[]
  constructor(titleText: string, contentTextList: string[]) {
    this.titleText = titleText
    this.contentTextList = contentTextList
  }
}

class TagInformation {
  tagText: string
  constructor(tagText: string) {
    this.tagText = tagText
  }
}

class BiliBiliVideoInformation {
  src: string;
  title: string;
  description: string;
  constructor(src: string, title: string, description: string) {
    this.src = src;
    this.title = title;
    this.description = description;
  }
}

class PersonalInformation {
  public name: string
  public basicInformationTitle: string
  public basicInformationList: TagInformation[]
  public professionalSkillTitle: string
  public professionalSkillList: TagInformation[]
  public contactInformationTitle: string
  public contactInformationList: TagInformation[]
  public educationExperienceTitle: string
  public educationExperienceList: CardInformation[]
  public personalSkillTitle: string
  public personalSkillList: CardInformation[]
  public competitionExperienceTitle: string
  public competitionExperienceList: CardInformation[]
  public workTitle: string
  public workList: BiliBiliVideoInformation[]
  public currentWorkIndex: number
  constructor() {
    this.name = ""
    this.basicInformationTitle = ""
    this.basicInformationList = []
    this.professionalSkillTitle = ""
    this.professionalSkillList = []
    this.contactInformationTitle = ""
    this.contactInformationList = []
    this.educationExperienceTitle = ""
    this.educationExperienceList = []
    this.personalSkillTitle = ""
    this.personalSkillList = []
    this.competitionExperienceTitle = ""
    this.competitionExperienceList = []
    this.workTitle = ""
    this.workList = []
    this.currentWorkIndex = 0
  }

  turnToNextWork() {
    this.currentWorkIndex++
    if (this.currentWorkIndex >= this.workList.length) {
      this.currentWorkIndex = 0
    }
  }
  turnToPreviousWork() {
    this.currentWorkIndex--
    if (this.currentWorkIndex < 0) {
      this.currentWorkIndex = this.workList.length - 1
    }
  }
}

const personalInformation: Ref<PersonalInformation> = ref(new PersonalInformation())
personalInformation.value.name = "黄昆程"
personalInformation.value.basicInformationTitle = "📄基本信息"
personalInformation.value.basicInformationList.push(new TagInformation("👤姓名:黄昆程"))
personalInformation.value.basicInformationList.push(new TagInformation("🏛院校:长安大学"))
personalInformation.value.basicInformationList.push(new TagInformation("🎓学历:2024级 本科"))
personalInformation.value.basicInformationList.push(new TagInformation("🏗专业:道路桥梁与渡河工程(国际工程班)"))
personalInformation.value.basicInformationList.push(new TagInformation("✨核心定位：土木工程 + 软件研发复合背景"))
personalInformation.value.basicInformationList.push(new TagInformation("🎯求职意向：工程软件开发/数字化实习"))
personalInformation.value.basicInformationList.push(new TagInformation("💼当前状态：在校在读，可实习"))
personalInformation.value.professionalSkillTitle = "🛠专业技能"
personalInformation.value.professionalSkillList.push(new TagInformation("AutoCAD二次开发"))
personalInformation.value.professionalSkillList.push(new TagInformation("Web前端开发"))
personalInformation.value.professionalSkillList.push(new TagInformation("数据建模分析"))
personalInformation.value.professionalSkillList.push(new TagInformation("力学分析"))
personalInformation.value.professionalSkillList.push(new TagInformation("建模与可视化"))
personalInformation.value.professionalSkillList.push(new TagInformation("BIM工程数字化"))
personalInformation.value.contactInformationTitle = "📞联系方式"
personalInformation.value.contactInformationList.push(new TagInformation("📧邮箱:2024903811@chd.edu.cn"))
personalInformation.value.contactInformationList.push(new TagInformation("☎电话:13976639743"))
personalInformation.value.contactInformationList.push(new TagInformation("💬微信:RdJ7748h"))
personalInformation.value.contactInformationList.push(new TagInformation("🐧QQ:494212901"))
personalInformation.value.contactInformationList.push(new TagInformation("🐙Github:https://github.com/HKC7748"))
personalInformation.value.educationExperienceTitle = "🎓教育经历"
personalInformation.value.educationExperienceList.push(new CardInformation("长安大学", ["2024级 | 公路学院 | 道路桥梁与渡河工程(国际工程班) | 本科",
  "主修课程:高等数学、线性代数、概率论与数理统计、工程力学、结构力学、土木工程制图、测量学、混凝土结构设计原理等。"]))
personalInformation.value.personalSkillTitle = "🔧个人技能"
personalInformation.value.personalSkillList.push(new CardInformation("工程软件开发与集成", ["💻C#与.NET生态：掌握C#与WPF框架，可开发复杂交互的桌面应用。精通AutoCAD .NET API二次开发，具备从图形操作、三维建模到服务封装的完整能力，能为专业工程软件开发功能扩展与自动化工具。",
  "🐍Python科学与工程计算：擅长使用NumPy、Pandas等进行多源工程数据处理与可视化分析。能运用PyQt等框架将算法封装为实用工具，并将线性代数、图形学原理转化为实际算法。",
  "📊MATLAB科研与仿真：熟练运用MATLAB进行数值计算、算法开发与数据可视化，能够构建力学领域的仿真模型，服务于科学研究与工程问题分析。",
  "🌐Web前端开发：掌握Vue.js及相关现代前端技术，能够构建响应式、交互式的数据可视化后台与单页面应用，具备将复杂业务流程转化为清晰前端界面的能力。"]))
personalInformation.value.personalSkillList.push(new CardInformation("工程建模、可视化与数字化", ["📐工程建模：熟练运用 AutoCAD、Revit、Civil 3D 进行建筑与基础设施的二维制图与三维信息模型搭建；掌握 SketchUp、SolidWorks，具备从概念设计到精细三维模型构建的能力，支持产品、结构与建筑的专业表达。",
  "🎥可视化呈现：掌握 D5 Render、Enscape 等工具，能将三维模型转化为高质量的效果图、动画及交互式漫游，直接服务于设计展示、方案汇报与数字化交付。"]))
personalInformation.value.competitionExperienceTitle = "🏆竞赛经历"
personalInformation.value.competitionExperienceList.push(new CardInformation("", ["🥇中交公规院杯”2025世界大学生桥梁设计大赛 (国三等奖)",
  "🥈全国大学生先进成图技术与产品信息建模创新大赛 (省第一名)",
  "🥈全国大学生物理实验竞赛 (省一等奖)",
  "🥈全国大学生物理学术竞赛 (省一等奖)"]))
personalInformation.value.workTitle = "🎬作品展示"
personalInformation.value.workList.push(new BiliBiliVideoInformation("//player.bilibili.com/player.html?bvid=BV1vXVG6aE3D&page=1", "AutoCAD桥梁参数化建模", "这是一个基于AutoCAD的二次开发项目，旨在实现桥梁的三维参数化建模。项目提供了一整套工具集，包含曲线处理、数据库操作、实体变换、扫掠拉伸等底层功能，并基于这些工具开发了针对T型梁、桥墩等桥梁构件的参数化建模服务。项目采用C#开发，架构上融合了工具类、服务层与WPF MVVM模式，用户可通过界面输入参数，快速自动生成复杂的桥梁三维实体模型。"))
personalInformation.value.workList.push(new BiliBiliVideoInformation("//player.bilibili.com/player.html?bvid=BV1vXVG6aEui&page=1", "AI桥梁生成工具", "这是一个基于AutoCAD .NET API开发的智能CAD桥梁生成工具。该工具利用本地部署的大模型解析用户自然语言指令，自动调用参数化算法与预设模板，实现桥梁构件的智能生成与装配。核心技术涵盖 AutoCAD .NET API、WPF 界面开发及大模型 API 集成。"))
personalInformation.value.workList.push(new BiliBiliVideoInformation("//player.bilibili.com/player.html?bvid=BV1wqVG6CESM&page=1", "质点-弹簧系统振动模拟工具", "这是一个基于Pymunk物理引擎和DearPyGui的质点-弹簧系统振动模拟工具，核心技术包括物理建模、实时模拟、傅里叶分析、数据可视化以及交互式图形界面设计，完整实现了从物理仿真到振动分析的全流程。"))
personalInformation.value.workList.push(new BiliBiliVideoInformation("//player.bilibili.com/player.html?bvid=BV1A8j76eEby&page=1", "车辆检测与交通分析系统", "这是一个基于 YOLOv8 的视频车辆检测系统，集成 PySide6 图形界面，支持检测计划配置、高效检测与可视化。核心功能包括车辆检测跟踪、透视/逆透视变换、卡尔曼滤波轨迹拟合，以及车道级时间/空间占有率、流量、排队长度等交通参数的统计分析。"))
personalInformation.value.workList.push(new BiliBiliVideoInformation("//player.bilibili.com/player.html?bvid=BV1kiVG6VEDm&page=1", "3维地球模型可视化系统", "这是一个利用二维平面模拟并渲染三维地球模型可视化系统。通过数学模型构建球体网格，并应用纹理贴图、三维旋转变换和透视投影，将三维坐标实时计算并绘制到二维的Pygame窗口或Turtle画布中，实现了动态、交互式的三维可视化效果。"))
personalInformation.value.workList.push(new BiliBiliVideoInformation("//player.bilibili.com/player.html?bvid=BV1iQVG6AEFA&page=1", "3维图形可视化系统", "这是一个基于Tkinter的3D图形可视化系统，核心技术涉及三维几何建模、坐标变换、视图投影以及深度排序算法以实现正确的遮挡关系。完整演示了计算机图形学中从建模到渲染的基本管线流程。"))
personalInformation.value.workList.push(new BiliBiliVideoInformation("//player.bilibili.com/player.html?bvid=BV1RXVG6aEx5&page=1", "CAD点阵文本生成器", "这是一个基于WPF MVVM架构的AutoCAD二次开发项目，核心技术涉及使用C#和WPF构建图形用户界面，通过MathNet.Numerics进行矩阵运算实现字符到点阵的转换映射，利用AutoCAD .NET API进行三维实体建模，实现了从文本输入到三维立方体阵列的自动化生成功能。"))
personalInformation.value.workList.push(new BiliBiliVideoInformation("//player.bilibili.com/player.html?bvid=BV1kqVG6kE18&page=1", "PyQt6图像格式转换工具", "这是一个基于PyQt6的图像格式转换工具，核心技术涉及使用PIL库进行图像处理，通过PyQt6构建图形用户界面实现文件管理、预览和批量操作。系统采用事件驱动架构处理用户交互，实现了图像信息的元数据提取和批量格式转换功能，完整展示了从图像读取到格式转换的完整处理流程。"))
personalInformation.value.workList.push(new BiliBiliVideoInformation("//player.bilibili.com/player.html?bvid=BV1CiVG6VEHA&page=1", "SolidWorks乐高车辆模型", "这是很久之前用solidworks做的一个以乐高为原型的车辆,感觉挺好玩的"))


</script>
<style scoped>


.main-style{
  width: 100%;
}
.personal-information-divider-style {
  width: 80%;
  margin: 5px 0;
}
.personal-introduction-divider-style {
  width: 90%;
  margin: 5px auto;
}
.personal-information-style{
  background-color: #1f3850;
  flex: 2;
}
.personal-introduction-style{
  background-color: #ffffff;
  flex: 5;
}
.profile-wrapper {
  margin: 50px auto;
  width: 200px;
  height: 200px;
}
.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.name-text-style{
  font-size: 30px;
  color: #ffffff;
  margin: 0 auto;
}

.personal-information-card-wrapper{
  margin: auto;
  width: 90%;
}
.personal-information-card-style{
  background-color: #274766;
}
.personal-information-title-text-style{
  font-size: 25px;
  color: #ffffff;
}
.personal-information-text-style{
  font-size: 15px;
  color: #ffffff;
}
.professional-skill-tag-style{
  background-color: #334b6f;
}

.personal-introduction-card-style{
  background-color: #f5f5f5;
  margin: 0 auto;
}
.personal-introduction-card-wrapper-style{
  background-color: #ffffff;
  margin: 0 auto;
  width: 90%;
}
.personal-introduction-title-text-style{
  font-size: 25px;
  color: #020202;
}
.personal-introduction-text-style{
  font-size: 15px;
  color: #000000;
}

.carousel-video-style {
  width: 100%;
  aspect-ratio: 16 / 9;
}
.button-style{
}
</style>
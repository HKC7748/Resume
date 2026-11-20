export interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

export interface CardItem {
  title: string;
  contents: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  tech: string[];
  bullets: string[];
  links: ProjectLink[];
  note?: string;
  linkNote?: string;
}

export interface WorkItem {
  src: string;
  title: string;
  description: string;
}

export interface ResumeData {
  name: string;
  summaryTitle: string;
  summary: string;
  basicInformationTitle: string;
  basicInformationList: string[];
  professionalSkillList: string[];
  contactInformationTitle: string;
  contactInformationList: ContactItem[];
  educationExperienceTitle: string;
  educationExperienceList: CardItem[];
  projectExperienceTitle: string;
  projectExperienceList: ProjectItem[];
  personalSkillTitle: string;
  personalSkillList: CardItem[];
  competitionExperienceTitle: string;
  competitionExperienceList: CardItem[];
  workTitle: string;
  workList: WorkItem[];
}

export const resume: ResumeData = {
  name: "黄昆程",
  summaryTitle: "个人简介",
  summary:
    "熟悉 C#/WPF、C++/CMake/Qt、Python 及 ObjectARX / AutoCAD .NET API，期望参与 CAD/BIM 工程软件研发。",
  basicInformationTitle: "基本信息",
  basicInformationList: [
    "院校：长安大学（211 / 双一流）",
    "学历：2024 级 本科",
    "专业：道路桥梁与渡河工程（国际工程班）", 
    "求职意向：CAD/BIM 工程软件研发实习",
    "可实习：即日起，每周 4–5 天",
  ],
  professionalSkillList: [
    "CAD 二次开发",
    "C# / WPF",
    "C++ / CMake / Qt",
    "ObjectARX / AutoCAD .NET API",
    "工程建模 / 数值仿真",
  ],
  contactInformationTitle: "联系方式",
  contactInformationList: [
    {
      label: "邮箱",
      value: "hkc7748@126.com",
      href: "mailto:hkc7748@126.com",
    },
    {
      label: "电话",
      value: "13976639743",
      href: "tel:13976639743",
    },
    {
      label: "微信",
      value: "RdJ7748h",
    },
    {
      label: "GitHub",
      value: "HKC7748",
      href: "https://github.com/HKC7748",
    },
    {
      label: "主页",
      value: "hkc7748.github.io/Resume",
      href: "https://hkc7748.github.io/Resume",
    },
  ],
  educationExperienceTitle: "教育经历",
  educationExperienceList: [
    {
      title: "长安大学（211 / 双一流）",
      contents: [
        "2024.09 – 2028.06 | 公路学院 | 道路桥梁与渡河工程（国际工程班）| 本科",
        "主修课程：数据分析、机器学习与深度学习、工程力学、测量学、桥梁工程、结构设计原理、路基路面工程",
      ],
    },
  ],
  projectExperienceTitle: "项目经历",
  projectExperienceList: [
    {
      title: "CadBridgeDesigner",
      subtitle: "基于 AutoCAD 的桥梁三维参数化设计插件 · 独立开发",
      tech: [
        "C#",
        ".NET Framework 4.8.1",
        "AutoCAD .NET API",
        "WPF",
        "MVVM",
      ],
      bullets: [
        "架构与交互：独立完成 Core/Tool/TestTool 3 个子工程设计；Core 定义命令入口与事件接口，Tool 在 Application.Idle 时注入处理器以解决插件加载时序问题，并自研 DLL 热加载工具实现免重启调试。",
        "参数化建模：实现柱式墩（盖梁、抗震挡块、支座垫石、墩柱、系梁、承台、桩基）与 T 梁（翼缘、腹板、马蹄、横隔板、湿接缝）的参数化生成；将二维轮廓转为 Region 后拉伸为 Solid3d 实体，支持 Jig 拖拽定位。",
        "数据与 UI：基于块扩展字典 + Xrecord 持久化 40+ 设计参数，DWG 重开可完整还原并支持块多实例复用；用 PaletteSet 嵌入 WPF 三面板（项目树 / 属性编辑器 / 日志），选择集变化联动刷新。",
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/HKC7748/CadBridgeDesigner",
        },
        {
          label: "演示视频",
          href: "https://www.bilibili.com/video/BV1vXVG6aE3D",
        },
      ],
      note: "开源项目",
    },
    {
      title: "DXF 自动审图工具",
      subtitle: "面向美国住宅报建图纸 · 企业笔试项目",
      tech: ["Python", "ezdxf", "规则引擎", "JSON"],
      bullets: [
        "图纸解析：解析 DXF 图层、块定义与插入实例、属性、布局及视口信息，构建结构化 JSON 中间数据，为规则检查提供统一模型。",
        "规则引擎：实现 4 大类 7 项审图规则——跨图一致性（门窗表、图纸目录）、设计逻辑（门扇碰撞）、IRC 2024 规范（卧室逃生窗、走廊净宽、起居室尺寸）与制图规范（标注篡改）；在样例图纸中检出 9 处错误。",
        "可扩展性：图层、块名、表头与阈值全部通过 config.json 配置，按 Door / Window / Room / Frame / Table / Dimension 模块拆分，便于新增规范与适配不同图纸。",
      ],
      links: [],
      note: "企业笔试项目",
      linkNote: "代码与图纸不公开，可面谈演示",
    },
    {
      title: "AI 桥梁生成工具",
      subtitle: "自然语言驱动的 CAD 建模原型",
      tech: ["AutoCAD .NET API", "WPF", "本地大模型", "参数化模板"],
      bullets: [
        "交互链路：集成本地部署大模型，将自然语言指令解析为桥梁构件类型与设计参数，自动调用参数化算法与预设模板完成构件生成与装配。",
        "可靠性设计：构建“自然语言 → 结构化参数 → CAD 命令”的调用链，加入参数校验与人工确认环节，降低自然语言误建模风险。",
        "端到端验证：以柱式墩、T 梁为对象完成从对话指令到三维模型的完整演示，验证 AI 辅助桥梁建模的可行性。",
      ],
      links: [
        {
          label: "演示视频",
          href: "https://www.bilibili.com/video/BV1vXVG6aEui",
        },
      ],
      note: "原型项目",
    },
  ],
  personalSkillTitle: "个人技能",
  personalSkillList: [
    {
      title: "工程软件开发",
      contents: [
        "CAD 二次开发：熟悉 AutoCAD ObjectARX .NET API，能完成图形操作、三维建模、块/扩展字典持久化与 WPF 面板集成。",
        "科学计算与工具链：使用 C++/Python 进行数值计算、算法开发与数据可视化；使用 CMake/Conan/vcpkg 管理 C++ 依赖与构建。",
      ],
    },
    {
      title: "工程建模、可视化与数字化",
      contents: [
        "工程建模：熟练使用 AutoCAD、Revit、Civil 3D 进行二维制图与三维信息模型搭建；掌握 SketchUp、SolidWorks。",
        "可视化呈现：掌握 D5 Render、Enscape，能将三维模型转化为效果图、动画与交互式漫游。",
      ],
    },
  ],
  competitionExperienceTitle: "荣誉奖励",
  competitionExperienceList: [
    {
      title: "",
      contents: [
        "全国大学生先进成图技术与产品信息建模创新大赛（全国一等奖）",
        "“中交公规院杯”2025 世界大学生桥梁设计大赛（全国三等奖）",
        "全国大学生物理实验竞赛（陕西省一等奖）",
        "交通视频流车辆检测分析系统 V1.0 (登记号:2026SR111516) ",
      ],
    },
  ],
  workTitle: "项目演示",
  workList: [
    {
      src: "//player.bilibili.com/player.html?bvid=BV1vXVG6aEui&page=1",
      title: "AI 桥梁生成工具",
      description:
        "集成本地部署大模型，将自然语言指令解析为桥梁构件参数与建模命令，驱动参数化模板完成构件生成与装配。核心技术：AutoCAD .NET API、WPF、本地大模型。",
    },
    {
      src: "//player.bilibili.com/player.html?bvid=BV1vXVG6aE3D&page=1",
      title: "AutoCAD 桥梁参数化建模",
      description:
        "基于 C# / AutoCAD .NET API 的桥梁参数化设计插件，支持 T 梁、柱式墩三维实体生成、Jig 拖放定位、扩展字典持久化与 WPF 三面板管理。",
    },
    {
      src: "//player.bilibili.com/player.html?bvid=BV1A8j76eEby&page=1",
      title: "交通视频车辆检测分析",
      description:
        "基于 YOLOv8 + ByteTrack 的车辆检测跟踪系统，支持多车道配置、透视变换、卡尔曼轨迹拟合与车道级交通参数统计。",
    },
    {
      src: "//player.bilibili.com/player.html?bvid=BV1iQVG6AEFA&page=1",
      title: "3D 图形可视化",
      description:
        "在二维画布中实现三维几何建模、坐标变换、透视投影与深度排序，演示从建模到渲染的基础图形管线。",
    },
    {
      src: "//player.bilibili.com/player.html?bvid=BV1RXVG6aEx5&page=1",
      title: "CAD 点阵文本生成器",
      description:
        "基于 WPF MVVM + MathNet.Numerics 将字符映射为点阵，通过矩阵运算生成三维立方体阵列，并调用 AutoCAD .NET API 自动建模。",
    },
    {
      src: "//player.bilibili.com/player.html?bvid=BV1wqVG6CESM&page=1",
      title: "质点-弹簧振动模拟",
      description:
        "基于 Pymunk + DearPyGui 的质点-弹簧系统仿真工具，支持实时模拟、傅里叶分析与交互式参数调节。",
    },
    {
      src: "//player.bilibili.com/player.html?bvid=BV1kiVG6VEDm&page=1",
      title: "3D 地球模型",
      description:
        "用二维画布模拟三维地球，完成球体网格构建、纹理贴图、旋转变换与透视投影。",
    },
    {
      src: "//player.bilibili.com/player.html?bvid=BV1kqVG6kE18&page=1",
      title: "PyQt6 图像格式转换",
      description:
        "基于 PyQt6 + PIL 的批量图像格式转换工具，支持文件管理、预览、元数据读取与批量转换。",
    },
    {
      src: "//player.bilibili.com/player.html?bvid=BV1CiVG6VEHA&page=1",
      title: "SolidWorks 乐高车辆模型",
      description:
        "以乐高为原型的 SolidWorks 车辆模型练习，关注零件拆分、装配关系与外观渲染。",
    },
  ],
};

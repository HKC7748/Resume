<template>
  <n-flex v-bind="mainLayout" class="main-style">
    <n-flex
      vertical
      justify="start"
      :size="14"
      class="personal-information-style"
    >
      <n-flex vertical class="profile-wrapper">
        <component
          :is="motion.div"
          v-bind="profileMotion"
          class="profile-image"
        >
          <n-image
            :src="profileImage"
            alt="黄昆程"
            class="profile-image"
          />
        </component>
        <component :is="motion.div" v-bind="nameMotion" class="name-text-style">
          <n-text class="name-text-style">{{ resume.name }}</n-text>
        </component>
        <n-flex :size="6" justify="center" wrap class="profile-skill-tags">
          <n-tag
            v-for="tag in resume.professionalSkillList"
            :key="tag"
            :bordered="false"
            size="small"
            class="profile-skill-tag"
          >
            {{ tag }}
          </n-tag>
        </n-flex>
      </n-flex>

      <component
        :is="motion.div"
        v-bind="personalInformationCardMotion"
        class="personal-information-card-wrapper"
      >
        <n-card class="personal-information-card-style">
          <n-flex vertical>
            <n-text class="personal-information-title-text-style">
              {{ resume.basicInformationTitle }}
            </n-text>
            <n-divider class="personal-information-divider-style" />
            <n-flex
              v-for="item in resume.basicInformationList"
              :key="item"
            >
              <n-text class="personal-information-text-style">
                {{ item }}
              </n-text>
            </n-flex>
          </n-flex>
        </n-card>
      </component>

      <component
        :is="motion.div"
        v-bind="personalInformationCardMotion"
        class="personal-information-card-wrapper"
      >
        <n-card class="personal-information-card-style">
          <n-flex vertical>
            <n-text class="personal-information-title-text-style">
              {{ resume.contactInformationTitle }}
            </n-text>
            <n-divider class="personal-information-divider-style" />
            <n-flex
              v-for="item in resume.contactInformationList"
              :key="item.label"
              class="contact-item"
            >
              <n-text class="personal-information-text-style">
                <template v-if="item.href">
                  <a
                    :href="item.href"
                    :target="isExternalLink(item.href) ? '_blank' : undefined"
                    rel="noopener noreferrer"
                    class="contact-link"
                  >
                    {{ item.label }}：{{ item.value }}
                  </a>
                </template>
                <template v-else>{{ item.label }}：{{ item.value }}</template>
              </n-text>
            </n-flex>
            <a
              :href="`${baseUrl}resume.pdf`"
              target="_blank"
              rel="noopener noreferrer"
              class="resume-download-link"
            >
              下载 PDF 简历
            </a>
          </n-flex>
        </n-card>
      </component>

    </n-flex>

    <n-flex vertical :size="8" class="personal-introduction-style">
      <component
        :is="motion.div"
        v-bind="personalIntroductionDivideMotion"
      >
        <SectionDivider :title="resume.summaryTitle" />
      </component>
      <component
        :is="motion.div"
        v-bind="personalIntroductionCardMotion"
        class="personal-introduction-card-wrapper-style"
      >
        <InfoCard :contents="[resume.summary]" />
      </component>

      <component
        :is="motion.div"
        v-bind="personalIntroductionDivideMotion"
      >
        <SectionDivider :title="resume.educationExperienceTitle" />
      </component>
      <component
        v-for="educationExperience in resume.educationExperienceList"
        :key="educationExperience.title"
        :is="motion.div"
        v-bind="personalIntroductionCardMotion"
        class="personal-introduction-card-wrapper-style"
      >
        <InfoCard
          :title="educationExperience.title"
          :contents="educationExperience.contents"
        />
      </component>



      <component
        :is="motion.div"
        v-bind="personalIntroductionDivideMotion"
      >
        <SectionDivider :title="resume.personalSkillTitle" />
      </component>
      <component
        v-for="personalSkill in resume.personalSkillList"
        :key="personalSkill.title"
        :is="motion.div"
        v-bind="personalIntroductionCardMotion"
        class="personal-introduction-card-wrapper-style"
      >
        <InfoCard
          :title="personalSkill.title"
          :contents="personalSkill.contents"
        />
      </component>




      <component
        :is="motion.div"
        v-bind="personalIntroductionDivideMotion"
      >
        <SectionDivider :title="resume.projectExperienceTitle" />
      </component>
      <component
        v-for="project in resume.projectExperienceList"
        :key="project.title"
        :is="motion.div"
        v-bind="personalIntroductionCardMotion"
        class="personal-introduction-card-wrapper-style"
      >
        <ProjectCard :project="project" />
      </component>

      

      <component
        :is="motion.div"
        v-bind="personalIntroductionDivideMotion"
      >
        <SectionDivider :title="resume.competitionExperienceTitle" />
      </component>
      <component
        v-for="(competitionExperience, index) in resume.competitionExperienceList"
        :key="index"
        :is="motion.div"
        v-bind="personalIntroductionCardMotion"
        class="personal-introduction-card-wrapper-style"
      >
        <InfoCard
          :title="competitionExperience.title"
          :contents="competitionExperience.contents"
        />
      </component>

      <component
        :is="motion.div"
        v-bind="personalIntroductionDivideMotion"
      >
        <SectionDivider :title="resume.workTitle" />
      </component>
      <component
        :is="motion.div"
        v-bind="personalIntroductionCardMotion"
        class="personal-introduction-card-wrapper-style"
      >
        <n-card
          v-if="currentWork"
          :title="currentWork.title"
          class="personal-introduction-card-style"
        >
          <iframe
            :src="currentWork.src"
            :title="currentWork.title"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin"
            class="carousel-video-style"
          ></iframe>
          <n-flex justify="space-around" class="video-controls">
            <n-button class="button-style" @click="previousWork">
              <n-text>上一个</n-text>
            </n-button>
            <n-button class="button-style" @click="nextWork">
              <n-text>下一个</n-text>
            </n-button>
          </n-flex>
          <n-text class="personal-introduction-text-style">
            {{ currentWork.description }}
          </n-text>
        </n-card>
      </component>
    </n-flex>
  </n-flex>
</template>


<script setup lang="ts">
import { motion } from "motion-v";
import { NButton, NCard, NDivider, NFlex, NImage, NText, NTag } from "naive-ui";
import { computed, onMounted, onUnmounted, ref } from "vue";
import profileImage from "./assets/image/profile.jpg";
import InfoCard from "./components/InfoCard.vue";
import ProjectCard from "./components/ProjectCard.vue";
import SectionDivider from "./components/SectionDivider.vue";
import { resume } from "./resume";

const baseUrl = import.meta.env.BASE_URL;

const profileMotion = ref({
  initial: { x: 0, y: 0, scale: 0, opacity: 0, rotate: -180 },
  whileInView: { x: 0, y: 0, scale: 1, opacity: 1, rotate: 0 },
  transition: { duration: 0.5, delay: 0 },
  whileHover: {
    y: -10,
    scale: 1.2,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
    rotate: 360,
  },
});
const nameMotion = ref({
  initial: { x: 0, y: 0, scale: 0, opacity: 0, rotate: -180 },
  whileInView: { x: 0, y: 0, scale: 1, opacity: 1, rotate: 0 },
  transition: { duration: 0.5, delay: 0 },
});
const personalInformationCardMotion = ref({
  initial: { x: 0, y: 150, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  transition: { duration: 0.5, delay: 0 },
  whileHover: { y: -10, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" },
});
const personalIntroductionDivideMotion = ref({
  initial: { x: 0, y: 150, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  transition: { duration: 0.5, delay: 0 },
});
const personalIntroductionCardMotion = ref({
  initial: { x: 0, y: 150, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  transition: { duration: 0.5, delay: 0 },
  whileHover: { y: -10, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" },
});

const mainLayout = ref({
  vertical: false,
});

const isExternalLink = (href?: string) => Boolean(href?.startsWith("http"));

const applyMotionDirection = (mobile: boolean) => {
  const initial = mobile ? { x: -150, y: 0 } : { x: 0, y: 150 };
  const inView = { x: 0, y: 0 };

  profileMotion.value.initial = {
    ...initial,
    scale: 0,
    opacity: 0,
    rotate: -180,
  };
  profileMotion.value.whileInView = {
    ...inView,
    scale: 1,
    opacity: 1,
    rotate: 0,
  };
  nameMotion.value.initial = {
    ...initial,
    scale: 0,
    opacity: 0,
    rotate: -180,
  };
  nameMotion.value.whileInView = {
    ...inView,
    scale: 1,
    opacity: 1,
    rotate: 0,
  };
  personalInformationCardMotion.value.initial = { ...initial, opacity: 0 };
  personalInformationCardMotion.value.whileInView = { ...inView, opacity: 1 };
  personalIntroductionDivideMotion.value.initial = { ...initial, opacity: 0 };
  personalIntroductionDivideMotion.value.whileInView = { ...inView, opacity: 1 };
  personalIntroductionCardMotion.value.initial = { ...initial, opacity: 0 };
  personalIntroductionCardMotion.value.whileInView = { ...inView, opacity: 1 };
};

const updateLayout = () => {
  const mobile = window.innerWidth <= 600;
  mainLayout.value.vertical = mobile;
  applyMotionDirection(mobile);
};

onMounted(() => {
  updateLayout();
  window.addEventListener("resize", updateLayout);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateLayout);
});

const currentWorkIndex = ref(0);
const currentWork = computed(() => resume.workList[currentWorkIndex.value]);

const nextWork = () => {
  if (!resume.workList.length) return;
  currentWorkIndex.value =
    (currentWorkIndex.value + 1) % resume.workList.length;
};

const previousWork = () => {
  if (!resume.workList.length) return;
  currentWorkIndex.value =
    (currentWorkIndex.value - 1 + resume.workList.length) %
    resume.workList.length;
};
</script>

<style scoped>
.main-style {
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  box-shadow: 0 18px 45px rgba(20, 40, 60, 0.18);
}

.personal-information-divider-style {
  width: 80%;
  margin: 5px 0;
}

.personal-information-style {
  background-color: #1f3850;
  flex: 2;
  min-width: 0;
  padding: 10px 0 24px;
  position: sticky;
  top: 0;
  align-self: flex-start;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
}

.personal-information-style::-webkit-scrollbar {
  width: 0;
}

.personal-introduction-style {
  background-color: #ffffff;
  flex: 5;
  min-width: 0;
  padding: 22px 0 36px;
}

.profile-wrapper {
  margin: 24px auto 8px;
  align-items: center;
  width: 100%;
}

.profile-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

.name-text-style {
  margin: 8px auto 0;
  font-size: 26px;
  color: #ffffff;
}

.profile-skill-tags {
  width: 100%;
  margin-top: 12px;
  padding: 0 14px;
  flex-wrap: wrap;
}

.profile-skill-tag {
  background-color: #334b6f;
  color: #ffffff;
}

.personal-information-card-wrapper {
  min-width: 0;
  margin: 0 auto;
  width: 90%;
}

.personal-information-card-style {
  background-color: #274766;
}

.personal-information-card-style :deep(.n-card__content) {
  padding: 18px 20px;
}

.personal-information-title-text-style {
  font-size: 23px;
  color: #ffffff;
}

.personal-information-text-style {
  font-size: 14px;
  color: #ffffff;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.contact-item {
  width: 100%;
}

.contact-link {
  color: #ffffff;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
}

.contact-link:hover {
  border-bottom-color: #ffffff;
}

.resume-download-link {
  display: block;
  margin-top: 10px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.resume-download-link:hover {
  color: #dbe7f3;
}

.personal-introduction-card-style {
  background-color: #f5f5f5;
  margin: 0 auto;
}

.personal-introduction-card-wrapper-style {
  background-color: #ffffff;
  min-width: 0;
  margin: 0 auto;
  width: 90%;
}

.personal-introduction-text-style {
  font-size: 15px;
  color: #000000;
  line-height: 1.7;
  overflow-wrap: anywhere;
}

.carousel-video-style {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
}

.video-controls {
  margin: 12px 0;
}

.button-style {
  min-width: 96px;
}

@media (max-height: 820px) and (min-width: 601px) {
  .personal-information-style {
    position: static;
    align-self: stretch;
    height: auto;
    overflow: visible;
  }
}

@media (max-width: 600px) {
  .main-style {
    max-width: none;
    box-shadow: none;
  }

  .personal-information-style,
  .personal-introduction-style {
    width: 100%;
    flex: none;
  }

  .personal-information-style {
    position: static;
    height: auto;
    overflow: visible;
    padding: 20px 0;
  }

  .personal-introduction-style {
    padding: 10px 0 30px;
  }

  .profile-wrapper {
    margin: 24px auto 8px;
    width: 100%;
  }

  .profile-image {
    width: 130px;
    height: 130px;
  }

  .name-text-style {
    font-size: 24px;
  }

  .personal-information-card-wrapper,
  .personal-introduction-card-wrapper-style {
    width: 94%;
  }

  .personal-information-title-text-style {
    font-size: 21px;
  }

  .personal-information-text-style,
  .personal-introduction-text-style {
    font-size: 14px;
  }
}
</style>

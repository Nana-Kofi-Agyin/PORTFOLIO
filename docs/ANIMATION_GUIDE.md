# Framer Motion Animation Guide

This portfolio uses Framer Motion for smooth, performant animations with scroll-triggered effects.

## 🎯 Key Features

1. **Scroll-In-View Logic** - Animations trigger when elements enter viewport
2. **Animation Variants** - Reusable animation configurations
3. **Staggered Children** - Sequential animation of list items
4. **Progressive Scroll Progress** - Reading progress bar at top

---

## 📦 Animation Variants

All variants are defined in `/src/utils/animationVariants.js`

### 1. Fade Up
Elements slide up from below while fading in.

```jsx
import { motion } from 'framer-motion';
import { fadeUpVariants } from '../utils/animationVariants';

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeUpVariants}
>
  <h2>My Title</h2>
</motion.div>
```

**Configuration:**
- `y: 50` → `y: 0`
- `opacity: 0` → `opacity: 1`
- Duration: 0.6s

---

### 2. Staggered Children
Container that animates children sequentially with a delay between each.

```jsx
import { staggerContainerVariants, staggerItemVariants } from '../utils/animationVariants';

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={staggerContainerVariants}
  className="grid grid-cols-3 gap-4"
>
  {items.map((item, index) => (
    <motion.div key={index} variants={staggerItemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

**Configuration:**
- `staggerChildren: 0.2` (200ms delay between children)
- Each child: `y: 20` → `y: 0`
- Duration: 0.5s per child

---

### 3. Scale In
Elements smoothly scale up with spring physics.

```jsx
import { scaleInVariants } from '../utils/animationVariants';

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={scaleInVariants}
>
  <div className="card">Service Card</div>
</motion.div>
```

**Configuration:**
- `scale: 0.8` → `scale: 1`
- `opacity: 0` → `opacity: 1`
- Spring physics: `stiffness: 100`, `damping: 20`

---

### 4. Slide Animations
Elements slide in from left or right.

```jsx
import { slideLeftVariants, slideRightVariants } from '../utils/animationVariants';

// Slide from left
<motion.div variants={slideLeftVariants}>Content</motion.div>

// Slide from right
<motion.div variants={slideRightVariants}>Content</motion.div>
```

---

## 🚀 Implementation Examples

### Projects Section (Staggered Grid)

```jsx
import { motion } from 'framer-motion';
import { staggerContainerVariants, staggerItemVariants } from '../utils/animationVariants';

const Projects = () => {
  const projects = [...]; // Your projects data
  
  return (
    <section id="projects" className="min-h-screen px-[9%] py-16">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        Featured Projects
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={staggerItemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="project-card"
          >
            {/* Project content */}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
```

---

### Skills Section (Progress Bars)

```jsx
import { motion } from 'framer-motion';
import { staggerContainerVariants, staggerItemVariants } from '../utils/animationVariants';

const Skills = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    // ...
  ];
  
  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.2 }
    })
  };
  
  return (
    <section id="skills" className="min-h-screen">
      <motion.div 
        className="grid grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainerVariants}
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={staggerItemVariants}>
            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="bg-gray-200 h-3 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-indigo-500 rounded-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={progressBarVariants}
                custom={skill.level}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
```

---

## 📊 Scroll Progress Bar

Add a reading progress indicator at the top of the page.

### Usage

```jsx
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div>
      <ScrollProgress />
      {/* Rest of your app */}
    </div>
  );
}
```

### How it works

```jsx
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll(); // 0 to 1
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
};
```

---

## 🎨 Viewport Configuration

### `viewport` prop options:

```jsx
viewport={{ 
  once: true,      // Only animate once (don't re-trigger on scroll up)
  amount: 0.2      // Trigger when 20% of element is visible
}}
```

**Common `amount` values:**
- `0.2` - Trigger early (when 20% visible) - Good for large sections
- `0.5` - Trigger halfway (when 50% visible) - Balanced default
- `0.8` - Trigger late (when 80% visible) - For small elements

---

## 🔥 Best Practices

1. **Use `once: true`** for better performance - animations only run once
2. **Keep stagger delays short** (0.1-0.2s) to avoid feeling sluggish
3. **Adjust `amount` based on element size** - smaller elements need higher amounts
4. **Combine with Tailwind transitions** for hover effects (CSS is faster for simple hovers)
5. **Use spring physics for scale animations** - feels more natural
6. **Wrap title + description together** in one motion.div for synchronized animations

---

## 🛠️ TypeScript Support

All variants are compatible with TypeScript. Create type definitions:

```typescript
// animationVariants.ts
import { Variants } from 'framer-motion';

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
```

---

## 📚 Additional Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Viewport Options](https://www.framer.com/motion/gestures/#viewport)
- [Animation Variants](https://www.framer.com/motion/animation/#variants)
- [Spring Physics](https://www.framer.com/motion/transition/#spring)

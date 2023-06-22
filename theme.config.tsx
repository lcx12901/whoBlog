import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>
    Lincx
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        font-size: 18px;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
    </span>,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Lincx'
    }
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  project: {
    link: 'https://github.com/lcx12901/whoBlog',
  },
  docsRepositoryBase: 'https://github.com/lcx12901/whoBlog/tree/main/',
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  footer: {
    text: '学固不在乎读书，然不读书则义理无由明',
  },
}

export default config

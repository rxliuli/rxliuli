import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import css from './ContentItem.module.css'
import { Space } from '../../../components/Space'
import { CreatorConfig } from '../api/CreatorApi'

type ContentItemProps = {
  item: CreatorConfig
}

export const ContentItem: React.FC<ContentItemProps> = (props) => {
  return (
    <div className={css.contentItem}>
      <img src={props.item.img} alt={'img'} />
      <h4>{props.item.title}</h4>
      <ReactMarkdown linkTarget={'_blank'}>{props.item.content}</ReactMarkdown>
      <Space>
        <a href={props.item.home} target={'_blank'} title={'官网'}>
          <i className="fas fa-home fa-2x" />
        </a>
        <a href={props.item.github} target={'_blank'} title={'github 源码'}>
          <i className="fab fa-github fa-2x" />
        </a>
      </Space>
    </div>
  )
}
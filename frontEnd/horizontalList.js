import React, { createContext, forwardRef, useContext } from "react"
import { render } from "react-dom"
import { FixedSizeList as List } from "react-window"
import styled from "styled-components"

const StickyListContext = createContext()
StickyListContext.displayName = "StickyListContext"

const StickyEl = styled.div`
  position: sticky !important;
  position: -webkit-sticky !important;
  z-index: 2;
`
const CustomScroll = styled.div`
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000000;
  }
`

const ItemWrapper = ({ data, index, style }) => {
  const { ItemRenderer, stickyIndices } = data
  if (stickyIndices && stickyIndices.includes(index)) {
    return null
  }
  return <ItemRenderer index={index} style={style} />
}

const Row = ({ index, style }) => (
  <div className='row' style={style}>
    Row {index}
  </div>
)

const StickyRow = ({ index, style }) => (
  <StickyEl style={style}>Sticky Row {index}</StickyEl>
)

const innerElementType = forwardRef(({ children, ...rest }, ref) => (
  <StickyListContext.Consumer>
    {({ stickyIndices }) => (
      <div ref={ref} {...rest}>
        {stickyIndices.map(index => (
          <StickyRow
            index={index}
            key={index}
            style={{ top: index * 35, left: 0, width: "100px", height: 35 }}
          />
        ))}

        {children}
      </div>
    )}
  </StickyListContext.Consumer>
))

const StickyList = ({ children, stickyIndices, ...rest }) => (
  <StickyListContext.Provider value={{ ItemRenderer: children, stickyIndices }}>
    <List itemData={{ ItemRenderer: children, stickyIndices }} {...rest}>
      {ItemWrapper}
    </List>
  </StickyListContext.Provider>
)

export default function HorizontalList(props) {
  const {width} = props
  console.log(width)
  return (
    <StickyList
      height={150}
      innerElementType={innerElementType}
      itemCount={1000}
      itemSize={100}
      layout='horizontal'
      direction='ltr'
      stickyIndices={[0, 1]}
      width={width}
      className="hsl"
    >
      {Row}
    </StickyList>
  )
}

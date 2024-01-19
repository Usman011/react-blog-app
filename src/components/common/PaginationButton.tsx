import { FC } from 'react'
import { Button, ButtonGroup } from '@mui/material'
import { INPUT_VARIANTS } from 'types/form.types'

interface PaginationButtonProps {
  currentPage: number
  onChange: (page: number) => void
  isLoading: boolean
  hasMore: boolean
}
const PaginationButton: FC<PaginationButtonProps> = ({
  currentPage,
  onChange,
  isLoading,
  hasMore
}) => {
  const handlePrevClick = () => {
    onChange(currentPage - 1)
  }

  const handleNextClick = () => {
    onChange(currentPage + 1)
  }
  return (
    <ButtonGroup variant={INPUT_VARIANTS.OUTLINED} aria-label='outlined button group'>
      <Button disabled={currentPage === 1 || isLoading} onClick={handlePrevClick}>
        Prev
      </Button>
      <Button>{currentPage}</Button>
      <Button disabled={isLoading || !hasMore} onClick={handleNextClick}>
        Next
      </Button>
    </ButtonGroup>
  )
}

export default PaginationButton

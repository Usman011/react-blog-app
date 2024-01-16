import { Button, ButtonGroup } from '@mui/material'

interface PaginationButtonProps {
  currentPage: number
  onChange: (page: number) => void
  isLoading: boolean
}
const PaginationButton: React.FC<PaginationButtonProps> = ({
  currentPage,
  onChange,
  isLoading
}) => {
  const handlePrevClick = () => {
    onChange(currentPage - 1)
  }

  const handleNextClick = () => {
    onChange(currentPage + 1)
  }
  return (
    <ButtonGroup variant='outlined' aria-label='outlined button group'>
      <Button disabled={currentPage === 1 || isLoading} onClick={handlePrevClick}>
        Prev
      </Button>
      <Button>{currentPage}</Button>
      <Button disabled={isLoading} onClick={handleNextClick}>
        Next
      </Button>
    </ButtonGroup>
  )
}

export default PaginationButton

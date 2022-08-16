import { StarOutline } from '../Icons/StarOutline'
import { StarSolid } from '../Icons/StarSolid'

interface Props {
  rating: number | null
}

const Rating = ({ rating: initialRating }: Props) => {
  const rating = initialRating === null ? 0 : initialRating
  const stars: JSX.Element[] = []

  for (let i = 0; i < rating; i++) {
    stars.push(<StarSolid key={`solid${i}`} />)
  }

  for (let i = 0; i < 5 - rating; i++) {
    stars.push(<StarOutline key={`outline${i}`} />)
  }
  return (
    <>
      {stars.map((star) => {
        return star
      })}
    </>
  )
}

export default Rating

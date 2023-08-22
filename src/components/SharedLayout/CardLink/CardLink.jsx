import React from 'react';
import { StyledCardLink } from './CardLink.styled';
const CardLink = () => {
  return (
    <StyledCardLink>
      <div className="card-link">
        <h2 className="card-link-title">
          Переглянути всі пропозиції зі знижкою
        </h2>
        {/* <div className="card-button-panel"> */}
        <button className="button-panel__see">Переглянути</button>
        {/* </div> */}
      </div>
    </StyledCardLink>
  );
};

export default CardLink;

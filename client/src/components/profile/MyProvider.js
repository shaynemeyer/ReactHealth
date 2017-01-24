import React from 'react';

export default () => {
  const renderProvider = () => {
    return (
      <div>
        Dr. Dan Baily MD
      </div>
    );
  }

  return (
    <div className="my-provider">
      {renderProvider()}
    </div>
  );
}
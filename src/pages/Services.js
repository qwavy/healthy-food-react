const Services = () => {
  return (
    <div className="border-black w-[1000px]">
      <div>
        <span>Неделя (1 из 4)</span>
        <div className="flex">
          <span>1</span>
          <span>1</span>
          <span>1</span>
          <span>1</span>
        </div>
      </div>
      <div className="flex">
        <div> День 1 </div>
        <div> День 1 </div>
        <div> День 1 </div>
        <div> День 1 </div>
        <div> День 1 </div>
        <div> День 1 </div>
        <div> День 1 </div>
      </div>
      <div>
        <span>Группа мышц</span>
        <div className="flex">
          <div>Ноги </div>
          <div>Ноги </div>
          <div>Ноги </div>
          <div>Ноги </div>
          <div>Ноги </div>
        </div>
      </div>
      <div className="flex items-center self-center justify-between">
        <div>
          <span>Набор упражнений </span>
          <div className="flex w-[600px] justify-between">
            <span>упражнения </span>
            <span>повторы </span>
            <span>подходы </span>
            <span>отдых </span>
          </div>
          <div className="flex flex-col">
            <div className="flex w-[600px] justify-between">
              <span>Выпады с гантелями</span>
              <span>10</span>
              <span>4</span>
              <span>1 мин</span>
            </div>
            <div className="flex w-[600px] justify-between">
              <span>Выпады с гантелями</span>
              <span>10</span>
              <span>4</span>
              <span>1 мин</span>
            </div>
            <div className="flex w-[600px] justify-between">
              <span>Выпады с гантелями</span>
              <span>10</span>
              <span>4</span>
              <span>1 мин</span>
            </div>
            <div className="flex w-[600px] justify-between">
              <span>Выпады с гантелями</span>
              <span>10</span>
              <span>4</span>
              <span>1 мин</span>
            </div>
          </div>
        </div>
        <div>
          <button>Сохранить программу</button>
          <button>Поделиться</button>
        </div>
      </div>
    </div>
  );
};
export default Services;

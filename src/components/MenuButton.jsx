export const MenuButton = ({ToggleMenu, navStatus}) => (
  <div className={`MenuButton ${navStatus}`} onClick={() => ToggleMenu()}>
    <div className={`MenuLine FirstLine ${navStatus}`}></div>
    <div className={`MenuLine SecondLine ${navStatus}`}></div>
    <div className={`MenuLine ThirdLine ${navStatus}`}></div>
  </div>
);

export const MenuButton = ({ToggleMenu, navStatus, currentRadius}) => (
  <div style={{ '--current-radius': currentRadius }} className={`MenuButton ${navStatus}`} onClick={() => ToggleMenu()}>
    <div className={`MenuLine FirstLine ${navStatus}`}></div>
    <div className={`MenuLine SecondLine ${navStatus}`}></div>
    <div className={`MenuLine ThirdLine ${navStatus}`}></div>
  </div>
);

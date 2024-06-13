export const MenuButton = ({ ToggleMenu, navStatus, currentRadius }) => (
  <div
    id="MenuButton"
    style={{ '--current-radius': currentRadius }}
    className={navStatus}
    onClick={() => ToggleMenu()}
  >
    <div className={`MenuLine FirstLine ${navStatus}`}></div>
    <div className={`MenuLine SecondLine ${navStatus}`}></div>
    <div className={`MenuLine ThirdLine ${navStatus}`}></div>
  </div>
);

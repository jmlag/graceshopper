import React from 'react'

import { Modal } from 'react-materialize'

export default function NetNeutrality(){
  return (
    <Modal
      header="Don't like what you see?"
      trigger={
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large red">
            <i className="large material-icons">help</i>
          </a>
        </div>}
    >
    Net Neutrality is the concept that the internet should be a <i>free and open</i> platform for all information. As of right now, the internet is goverend by rules based on Title II of the Communcations Act - ensuring that all websites are treated equally in terms of speed and accessability whether they be used for streaming, learning, or gaming. As of right now, Chairman Pai wants to change the internet to be put under Title I, removing most government restrictions on how ISP's can dole out the internet. Without these protections, it's only a matter of time before this page goes from a joke to reality. We've reached the point in society that universal access to the internet is not a luxury but a <i>necessity</i>, and as such, our access to the internet needs to be protected.
    <br /> <br />
    For more information and to find out how you can help the battle for a free internet visit <a href="https://www.battleforthenet.com/">www.battleforthenet.com</a>
    </Modal>
  )
}

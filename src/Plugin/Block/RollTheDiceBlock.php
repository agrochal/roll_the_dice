<?php

namespace Drupal\roll_the_dice\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Dice roller.
 *
 * @Block(
 *   id = "RollTheDiceBlock",
 *   admin_label = @Translation("JavaScript dice roller"),
 * )
 */
class RollTheDiceBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#markup' => '<div id="dice"></div><div id="btn-box"><div id="button">Roll the dice!</div></div>',
      '#attached' => [
        'library' => [
          'roll_the_dice/scripts',
          'roll_the_dice/styles',
        ],
      ],
    ];
  }

}

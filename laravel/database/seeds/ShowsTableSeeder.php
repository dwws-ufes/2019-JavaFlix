<?php

use Illuminate\Database\Seeder;
use App\Show;

class ShowsTableSeeder extends Seeder //phpcs:ignore
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $shows = [
            [
                'name'     => 'Chernobyl',
                'year'     => '2019',
                'synopsis' => 'In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world\'s worst man-made catastrophes.', //phpcs:ignore
                'seasons'  => '01',
                'producer' => 'HBO',
                'type'     => 'series'
            ],
            [
                'name'     => 'Breaking Bad',
                'year'     => '2008',
                'synopsis' => 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.', //phpcs:ignore
                'seasons'  => '05',
                'producer' => 'AMC',
                'type'     => 'series'
            ],
            [
                'name'     => 'Game of Thrones',
                'year'     => '2011',
                'synopsis' => 'Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.', //phpcs:ignore
                'seasons'  => '08',
                'producer' => 'HBO',
                'type'     => 'series'
            ],
            [
                'name'     => 'Cosmos',
                'year'     => '1980',
                'synopsis' => 'Astronomer Carl Sagan leads us on an engaging guided tour of the various elements and cosmological theories of the universe.', //phpcs:ignore
                'seasons'  => '01',
                'producer' => 'BBC',
                'type'     => 'series'
            ],
            [
                'name'     => 'Rick e Morty',
                'year'     => '2013',
                'synopsis' => 'An animated series that follows the exploits of a super scientist and his not-so-bright grandson.', //phpcs:ignore
                'seasons'  => '03',
                'producer' => 'Adult Swim',
                'type'     => 'series'
            ],
            [
                'name'     => 'O Poderoso Chefão',
                'year'     => '1972',
                'synopsis' => 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', //phpcs:ignore
                'seasons'  => '00',
                'producer' => 'Paramount Pictures',
                'type'     => 'movie'
            ],
            [
                'name'     => 'Batman: O Cavaleiro das Trevas',
                'year'     => '2008',
                'synopsis' => 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', //phpcs:ignore
                'seasons'  => '00',
                'producer' => 'Warner Bros.',
                'type'     => 'movie'
            ],
            [
                'name'     => '12 Homens e uma Sentença',
                'year'     => '1952',
                'synopsis' => 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.', //phpcs:ignore
                'seasons'  => '00',
                'producer' => ' Orion-Nova Productions',
                'type'     => 'movie'
            ],
            [
                'name'     => 'Clube da Luta',
                'year'     => '1999',
                'synopsis' => 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.', //phpcs:ignore
                'seasons'  => '00',
                'producer' => 'Fox',
                'type'     => 'movie'
            ],
            [
                'name'     => 'Pulp Fiction: Tempo de Violência',
                'year'     => '1994',
                'synopsis' => 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', //phpcs:ignore
                'seasons'  => '00',
                'producer' => 'Miramax',
                'type'     => 'movie'
            ],
        ];
        foreach ($shows as $show) {
            Show::create($show);
        }
    }
}

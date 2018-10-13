import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../services/hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
    heroes = Hero[];
    selectedHero: Hero;
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    constructor(private heroService: HeroService) {
    }
    getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }

    ngOnInit() {
        this.getHeroes();
    }

}

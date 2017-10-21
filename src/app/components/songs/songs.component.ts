import { Component, Input } from '@angular/core';
import { TranslateService } from '../../translate/translate.service'

@Component({
    selector: 'songs',
    templateUrl: './songs.component.html'
})
export class SongsComponent {
    @Input() public topmovies: Array<any> = [];
    birthday: Date = new Date(1988, 3, 15);
    toggle = true;
    name: string = 'Abhishek';
    translatedText: string;
    supportedLanguages: any[];
    heroes: any[] = [];
    canFly = true;
    cname: string = '';
    mutate = true;
    title = 'Flying Heroes (pure pipe)';
    herosList = [
        { name: 'Windstorm', canFly: true },
        { name: 'Bombasto', canFly: false },
        { name: 'Magneto', canFly: false },
        { name: 'Tornado', canFly: true }
    ];

    constructor(private translateService: TranslateService) { this.reset(); }

    ngOnChanges() {

    }

    ngOnInit() {
        // standing data
        this.supportedLanguages = [
            { display: 'English', value: 'en' },
            { display: 'Español', value: 'es' },
            { display: '华语', value: 'zh' },
        ];

        this.selectLang('es');

    }

    ngDoCheck() {

    }

    ngAfterContentInit() {

    }

    ngAfterContentChecked() {

    }

    ngAfterViewInit() {

    }

    ngAfterViewChecked() {

    }

    ngOnDestroy() {
       
    }

    isCurrentLang(lang: string) {
        return lang === this.translateService.currentLang;
    }

    selectLang(lang: string) {
        // set default;
        this.translateService.use(lang);
        this.refreshText();
    }

    refreshText() {
        this.translatedText = this.translateService.instant('helloworld');
    }
    get format() {
        return this.toggle ? 'shortDate' : 'fullDate';
    }

    toggleFormat() {
        this.toggle = !this.toggle;
    }

    addHero() {
        if (!this.name.trim()) { return; }
        let hero = { name: this.cname.trim(), canFly: this.canFly };
        if (this.mutate) {
            // Pure pipe won't update display because heroes array reference is unchanged
            // Impure pipe will display
            this.heroes.push(hero);
        } else {
            // Pipe updates display because heroes array is a new object
            this.heroes = this.heroes.concat(hero);
        }
    }

    reset() { this.heroes = this.herosList.slice(); }

}
{


    // union types 

type FrontendDeveloper = 'fakibajDeveloper' | 'frontendDeveloper';

const newDeveloper : FrontendDeveloper = 'frontendDeveloper'

type FullstactDeveloper = FrontendDeveloper | 'BackendDeveloper';

type Developer = FrontendDeveloper | FullstactDeveloper;

const developers : FullstactDeveloper = 'BackendDeveloper';

type User = {
    name : string;
    email : string;
    gender : 'male' | 'female';
    bloodGroup : 'a+' | 'b+' | 'ab+';
}

const user1 : User = {
    name : 'snu seam',
    email : 'email',
    gender: 'male',
    bloodGroup : 'b+'
}

// intersection

type BatsMan = 'Bating';
type Baller = 'Balling';

type AllRounder = BatsMan & Baller;

type GraphicDesigner = {
    skills : string[];
    designation1 : 'Designer'
}

type UiUxDesigner = {
    skills : string[];
    designation2 : 'uiuxDesign'
}

type Designer = GraphicDesigner & UiUxDesigner;

const designer : Designer = {
    skills : ['photoshop','illastrator','figma'],
    designation1 : 'Designer',
    designation2 : 'uiuxDesign'
}

}
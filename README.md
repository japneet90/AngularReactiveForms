# Reactive Form Validations with Angular Material and Filters

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## How to implement Reactive Form Validations?

#### 1. Add form group with input and mat-error elements in html. For Example:

``` 
    <form [formGroup]="myReactiveForm">
        <mat-form-field>
            <input formControlName="FullName" matInput placeholder="Full  Name">
        </mat-form-field>
        <mat-error *ngIf="!myReactiveForm.get('FullName').valid &&                         myReactiveForm.get('FullName').touched">
            <span> 
                Please enter Full Name !!!
            </span>
        </mat-error>
    </form>
```
#### 2. Add Submit button for actions(It will call onFormSubmit method in component)
```
    <button mat-raised-button (click)="onFormSubmit(myReactiveForm.value)">         Submit 
    </button>
```

#### 3. Declare basic variables in component(app.component.ts)
```
    myReactiveForm: FormGroup;
    FullName: string = '';
    Address: string = '';
    DOB: Date = null;
    Gender: string = '';
    Interests: string = '';
    Email: string = '';
    IsAccepted: number = 0;
    showForm: boolean = true;

    formErrors = {
        FullName: '',
        Address: '',
        DOB: '',
        Gender: '',
        Interests: '',
        Email: ''
    };
```

#### 4. Initialize Form and implement validations as per requirements
```
    this.myReactiveForm = this.form.group({
      'FullName': [null, [Validators.required]],
      'Address': [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(500)])],
      'DOB': [null, Validators.required],
      'Gender': [null, Validators.required],
      'Interests': [null, Validators.required],
      'Email': [null, Validators.compose([Validators.required, Validators.email])],
      'IsAccepted': [null]
    });
```


#### 5. Create new method that will be used for inputs to make them touched and it helps in showing validation messages without touching any input and clicking on submit button
```
    markFormAsTouched() {
    let objectValues = ((obj) => { 
        return Object.keys(obj).map(e => obj[e]);
        });

    objectValues(this.myReactiveForm.controls)
        .forEach(control => {
            control.markAsTouched();
        })
  }
```
#### 5. Now simply call the submit method 
```
onFormSubmit() {
    this.markFormAsTouched();
}    
```

## How to implement filters?
#### 1. Add new service "filter.ts" and add filter(this will return string value based on number like id etc ) as follows:
```
@Pipe({
    name: 'genderFilter'
})

@Injectable()
export class genderFilter implements PipeTransform {
    transform(val: number): string {
        if(val == 1) return 'wife';
        if(val == 0) return 'husband';
    }
}    
```

#### 2. Include in module and use it in html as shown below:
```
{{gender | genderFilter}}   
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

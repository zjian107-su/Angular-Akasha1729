import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalindromeListComponent } from './components/palindrome-list/palindrome-list.component';
import { CityFilterComponent } from './components/city-filter/city-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddToListComponent } from './components/add-to-list/add-to-list.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterAutoIncrementComponent } from './components/counter-auto-increment/counter-auto-increment.component';
import { FibonacciComponent } from './components/fibonacci/fibonacci.component';
import { DiPlaygroundComponent } from './components/di-playground/di-playground.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CustomAttributeDirectiveComponent } from './components/custom-attribute-directive/custom-attribute-directive.component';
import { HoverHighlightDirective } from './directives/hover-highligh.directive';
import { InputDirectiveDirective } from './directives/input-directive.directive';
import { InputAttributeDirectiveComponent } from './components/input-attribute-directive/input-attribute-directive.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { StructuralUnlessDirective } from './directives/structural-unless.directive';
import { BrainstormVoteComponent } from './components/brainstorm-vote/brainstorm-vote.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RxjsObservableSubscriberComponent } from './components/rxjs-observable-subscriber/rxjs-observable-subscriber.component';
import { RxjsCounterComponent } from './components/rxjs-counter/rxjs-counter.component';
import { RxjsPipeOperatorsComponent } from './components/rxjs-pipe-operators/rxjs-pipe-operators.component';
import { PlansComponent } from './components/plans/plans.component';
import { StringComponent } from './components/string/string.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { TrafficLightComponent } from './components/traffic-light/traffic-light.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ProcessBarComponent } from './components/process-bar/process-bar.component';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { PracticeTriangleComponent } from './components/practice-triangle/practice-triangle.component';
import { NestedNavComponent } from './components/nested-nav/nested-nav.component';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { InterviewFormComponent } from './components/interview-form/interview-form.component';
import { InputOutputEventemitterComponent } from './components/input-output-eventemitter/input-output-eventemitter.component';
import { ChildComponent } from './components/input-output-eventemitter/child/child.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { HttpUserListComponent } from './components/http-user-list/http-user-list.component';
import { FilterTitleAndAuthorComponent } from './components/filter-title-and-author/filter-title-and-author.component';
import { CardShowDetailComponent } from './components/card-show-detail/card-show-detail.component';
import { CardShowDetailChildComponent } from './components/card-show-detail/card-show-detail-child/card-show-detail-child.component';
import { HttpCategoriesComponent } from './components/http-categories/http-categories.component';
import { PlaygroundChildComponent } from './components/playground/playground-child/playground-child.component';
import { PlaygroundComponent } from './components/playground/playground.component';

@NgModule({
  declarations: [
    AppComponent,
    PalindromeListComponent,
    CityFilterComponent,
    AddToListComponent,
    CounterComponent,
    CounterAutoIncrementComponent,
    FibonacciComponent,
    DiPlaygroundComponent,
    HighlightDirective,
    CustomAttributeDirectiveComponent,
    HoverHighlightDirective,
    InputDirectiveDirective,
    InputAttributeDirectiveComponent,
    StructuralDirectiveComponent,
    StructuralUnlessDirective,
    BrainstormVoteComponent,
    PaginationComponent,
    RxjsObservableSubscriberComponent,
    RxjsCounterComponent,
    RxjsPipeOperatorsComponent,
    PlansComponent,
    StringComponent,
    LoginFormComponent,
    TrafficLightComponent,
    CalculatorComponent,
    ProcessBarComponent,
    HttpClientComponent,
    PracticeTriangleComponent,
    NestedNavComponent,
    LoadingPageComponent,
    InterviewFormComponent,
    InputOutputEventemitterComponent,
    ChildComponent,
    DynamicFormComponent,
    HttpUserListComponent,
    FilterTitleAndAuthorComponent,
    CardShowDetailComponent,
    CardShowDetailChildComponent,
    HttpCategoriesComponent,
    PlaygroundComponent,
    PlaygroundChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

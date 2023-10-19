function skillsMember(){
    return{
        restrict: 'E',
        tamplateURL: 'module/skills/views/member.html',
        controller: 'SkillsMemberController',
        constrollerAs: 'vm',
        bindToController: true,
        scope: {
            member:'m'
        }

    }
}
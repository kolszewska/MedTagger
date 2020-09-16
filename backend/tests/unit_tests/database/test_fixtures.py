from typing import Any

import pytest

from medtagger.database.fixtures import apply_all_fixtures
from medtagger.repositories import roles as RolesRepository

@pytest.fixture
def mocked_read_roles_repository(mocker: Any) -> None:
    mocked_user_repository = mocker.patch.object(RolesRepository, 'role_exists')
    return mocked_user_repository


@pytest.fixture
def mocked_add_roles_repository(mocker: Any) -> None:
    mocked_user_repository = mocker.patch.object(RolesRepository, 'add_role')
    mocked_user_repository.return_value = None
    return mocked_user_repository


def test_inserting_user_roles(mocked_read_roles_repository, mocked_add_roles_repository):
    mocked_read_roles_repository.return_value = False
    apply_all_fixtures()
    mocked_add_roles_repository.assert_called_with('admin', 'doctor', 'volunteer')


def test_inserting_user_roles_skips_if_they_exist(mocked_read_roles_repository, mocked_add_roles_repository):
    mocked_read_roles_repository.side_effect = [True, False, False]
    apply_all_fixtures()
    mocked_add_roles_repository.assert_called_with('doctor', 'volunteer')
